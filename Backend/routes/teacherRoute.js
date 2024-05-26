import express from 'express';
import { body, validationResult } from 'express-validator';
import Teacher from '../models/TeacherModel.js';
import findToken from '../Middleware/findToken.js';

const router = express.Router();

router.get('/getAllSubjects', findToken, async (req, res) => {
    try {
        const course = await Teacher.find({user: req.user});
        res.status(200).json(course);
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});
 
router.post('/createNewSubject', [
    body('CourseName').isLength({min:5}).withMessage('Minimum 5 characters are required'),
    body('NoOfStudentEnrolled').notEmpty().withMessage('Enter a Valid Number'),
    body('CourseType').isLength({ min: 5 }).withMessage('CourseType Type must be at least 5 characters long'),
    body('CourseExpense').isNumeric().withMessage('Only Numbers are allowed'),
    body('FromData').notEmpty().withMessage('Invalid Date Format'),
    body('ToDate').notEmpty().withMessage('Invalid Date Format'),
    body('StatusOfTheCourse').isLength({ min: 5 }).withMessage('Select the status of the Course'),
    body('OverallGradesInTheCourse').notEmpty().withMessage('Enter a valid grades for the Course'),
    body('Priority').notEmpty().withMessage('Choose Priority'),
], findToken, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { CourseName,NoOfStudentEnrolled, CourseType,CourseExpense,CourseBudget, FromData, ToDate, StatusOfTheCourse, OverallGradesInTheCourse, Priority } = req.body;
        const product = new Teacher({
            CourseName,
            NoOfStudentEnrolled,
            CourseType,
            CourseExpense,
            CourseBudget,
            FromData,
            ToDate,
            StatusOfTheCourse,
            OverallGradesInTheCourse,
            Priority,
            user: req.user,
        });
        await product.save();
        res.status(201).send(product);

    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});

router.put('/updateCourseDetails/:id', findToken, async (req, res) => {
    try {
        const { CourseName,NoOfStudentEnrolled, CourseType, FromData, ToDate, StatusOfTheCourse, OverallGradesInTheCourse, Priority } = req.body;
        let updatedProjectDetails = {};
        if (CourseName) updatedProjectDetails.CourseName = CourseName;
        if (NoOfStudentEnrolled) updatedProjectDetails.NoOfStudentEnrolled = NoOfStudentEnrolled;
        if (CourseType) updatedProjectDetails.CourseType = CourseType;
        if (FromData) updatedProjectDetails.FromData = FromData;
        if (ToDate) updatedProjectDetails.ToDate = ToDate;
        if (StatusOfTheCourse) updatedProjectDetails.StatusOfTheCourse = StatusOfTheCourse;
        if (OverallGradesInTheCourse) updatedProjectDetails.OverallGradesInTheCourse = OverallGradesInTheCourse;
        if (Priority) updatedProjectDetails.Priority = Priority;

        const updatedDetails = await Teacher.findById(req.params.id);
        if (!updatedDetails) {
            return res.status(404).json({ error: 'Project not found' });
        }
        if (updatedDetails.user.toString() !== req.user) {
            return res.status(403).send({ error: 'Access Denied' });
        }

        const updated = await Teacher.findByIdAndUpdate(req.params.id, updatedProjectDetails, { new: true });
        res.status(200).json(updated);
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});

router.delete('/removeTheCourse/:id', findToken, async (req, res) => {
    try {
        const deleteProject = await Teacher.findById(req.params.id);
        if (!deleteProject) {
            return res.status(404).json({ error: 'Project not found' });
        }

        if (deleteProject.user.toString() !== req.user) {
            return res.status(403).json({ error: 'Access Denied' });
        }

        await Teacher.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});

export default router;
