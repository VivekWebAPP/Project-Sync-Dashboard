import express from 'express';
import { body, validationResult } from 'express-validator';
import StudentModel from '../models/StudentModel.js';
import findToken from '../middleware/findToken.js';

const router = express.Router();

router.get('/getAllAssignments', findToken, async (req, res) => {
    try {
        const products = await StudentModel.find({user: req.user});
        res.status(200).json(products);
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});
 
router.post('/createANewAssignment', [
    body('TeacherName').isLength({min:5}).withMessage('Minimum 5 characters are required'),
    body('AssignmentName').isLength({ min: 5 }).withMessage('Project Name must be at least 5 characters long'),
    body('Subject').isLength({ min: 5 }).withMessage('Project Type must be at least 5 characters long'),
    body('CoursePrice').isNumeric().withMessage('Only numbers allowed'),
    body('ExpensesName').notEmpty().withMessage('Expense name is required'),
    body('Expenses').isNumeric().withMessage('Please enter a valid number'),
    body('Budget').isNumeric().notEmpty().withMessage('Please provide the budget'),
    body('AdditionalBudgetName').notEmpty().withMessage('Please add additional budget name'),
    body('AdditionalBudget').notEmpty().isNumeric().withMessage('Please add additional budget amount'),
    body('FromData').notEmpty().withMessage('Invalid Date Format'),
    body('ToDate').notEmpty().withMessage('Invalid Date Format'),
    body('StatusOfTheAssignment').isLength({ min: 5 }).withMessage('Select the status of the project'),
    body('Grades').notEmpty().withMessage('Enter Project Grades'),
    body('Priority').notEmpty().withMessage('Choose Priority'),
], findToken, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { TeacherName,AssignmentName, Subject, CoursePrice,ExpensesName, Expenses,Budget,AdditionalBudgetName,AdditionalBudget, FromData, ToDate, StatusOfTheAssignment, Grades, Priority } = req.body;
        const product = new StudentModel({
            TeacherName,
            AssignmentName,
            Subject,
            CoursePrice,
            ExpensesName,
            Expenses,
            Budget,
            AdditionalBudgetName,
            AdditionalBudget,
            FromData,
            ToDate,
            StatusOfTheAssignment,
            Grades,
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

router.put('/updateProject/:id', findToken, async (req, res) => {
    try {
        const { TeacherName,AssignmentName, Subject,CoursePrice, FromData, ToDate, StatusOfTheAssignment, Grades, Priority } = req.body;
        let updatedProjectDetails = {};
        if (TeacherName) updatedProjectDetails.TeacherName = TeacherName;
        if (AssignmentName) updatedProjectDetails.AssignmentName = AssignmentName;
        if (Subject) updatedProjectDetails.Subject = Subject;
        if (CoursePrice) updatedProjectDetails.CoursePrice = CoursePrice;
        if (FromData) updatedProjectDetails.FromData = FromData;
        if (ToDate) updatedProjectDetails.ToDate = ToDate;
        if (StatusOfTheAssignment) updatedProjectDetails.StatusOfTheAssignment = StatusOfTheAssignment;
        if (Grades) updatedProjectDetails.Grades = Grades;
        if (Priority) updatedProjectDetails.Priority = Priority;

        const updatedDetails = await StudentModel.findById(req.params.id);
        if (!updatedDetails) {
            return res.status(404).json({ error: 'Project not found' });
        }
        if (updatedDetails.user.toString() !== req.user) {
            return res.status(403).send({ error: 'Access Denied' });
        }

        const updated = await StudentModel.findByIdAndUpdate(req.params.id, updatedProjectDetails, { new: true });
        res.status(200).json(updated);
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});

router.delete('/deleteTheProject/:id', findToken, async (req, res) => {
    try {
        const deleteProject = await StudentModel.findById(req.params.id);
        if (!deleteProject) {
            return res.status(404).json({ error: 'Project not found' });
        }

        if (deleteProject.user.toString() !== req.user) {
            return res.status(403).json({ error: 'Access Denied' });
        }

        await StudentModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});

export default router;
