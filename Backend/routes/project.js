import express from 'express';
import { body, validationResult } from 'express-validator';
import ProductModel from '../models/ProjectDetailes.js';
import findToken from '../Middleware/findToken.js';

const router = express.Router();

router.get('/getAllData', findToken, async (req, res) => {
    try {
        const products = await ProductModel.find({user: req.user});
        res.status(200).json(products);
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});

router.post('/createNewProject', [
    body('CompanyName').isLength({min:5}).withMessage('Minimum 5 characters are required'),
    body('ProjectName').isLength({ min: 5 }).withMessage('Project Name must be at least 5 characters long'),
    body('ProjectType').isLength({ min: 5 }).withMessage('Project Type must be at least 5 characters long'),
    body('ProjectPrice').isNumeric().withMessage('Please enter a valid number'),
    body('ProjectBudget').isNumeric().withMessage('Enter a valid number'),
    body('FromData').notEmpty().withMessage('Invalid Date Format'),
    body('ToDate').notEmpty().withMessage('Invalid Date Format'),
    body('StatusOfTheProject').isLength({ min: 5 }).withMessage('Select the status of the project'),
    body('Location').notEmpty().withMessage('Enter Project Location'),
    body('Priority').notEmpty().withMessage('Choose Priority'),
], findToken, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { CompanyName,ProjectName, ProjectType, ProjectPrice, ProjectBudget, FromData, ToDate, StatusOfTheProject, Location, Priority } = req.body;
        const product = new ProductModel({
            CompanyName,
            ProjectName,
            ProjectType,
            ProjectPrice,
            ProjectBudget,
            FromData,
            ToDate,
            StatusOfTheProject,
            Location,
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
        const { CompanyName,ProjectName, ProjectType, ProjectPrice, FromData, ToDate, StatusOfTheProject, Location, Priority } = req.body;
        let updatedProjectDetails = {};
        if (CompanyName) updatedProjectDetails.CompanyName = CompanyName;
        if (ProjectName) updatedProjectDetails.ProjectName = ProjectName;
        if (ProjectType) updatedProjectDetails.ProjectType = ProjectType;
        if (ProjectPrice) updatedProjectDetails.ProjectPrice = ProjectPrice;
        if (FromData) updatedProjectDetails.FromData = FromData;
        if (ToDate) updatedProjectDetails.ToDate = ToDate;
        if (StatusOfTheProject) updatedProjectDetails.StatusOfTheProject = StatusOfTheProject;
        if (Location) updatedProjectDetails.Location = Location;
        if (Priority) updatedProjectDetails.Priority = Priority;

        const updatedDetails = await ProductModel.findById(req.params.id);
        if (!updatedDetails) {
            return res.status(404).json({ error: 'Project not found' });
        }
        if (updatedDetails.user.toString() !== req.user) {
            return res.status(403).send({ error: 'Access Denied' });
        }
        const updated = await ProductModel.findByIdAndUpdate(req.params.id, updatedProjectDetails, { new: true });
        res.status(200).json(updated);
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});

router.delete('/deleteTheProject/:id', findToken, async (req, res) => {
    try {
        const deleteProject = await ProductModel.findById(req.params.id);
        
        if (!deleteProject) {
            return res.status(404).json({ error: 'Project not found' });
        }

        if (deleteProject.user.toString() !== req.user) {
            return res.status(403).json({ error: 'Access Denied' });
        }

        const deletedProject = await ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});

export default router;
