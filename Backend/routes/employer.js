import express from 'express';
import { body, validationResult } from 'express-validator';
import Employeer from '../models/EmployeeModel.js';
import findToken from '../Middleware/findToken.js';

const router = express.Router();

router.get('/getAllData', findToken, async (req, res) => {
    try {
        const products = await Employeer.find({user: req.user});
        res.status(200).json(products);
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});
 
router.post('/createNewProject', [
    body('ProjectManagerName').isLength({min:5}).withMessage('Minimum 5 characters are required'),
    body('ProjectName').isLength({ min: 5 }).withMessage('Project Name must be at least 5 characters long'),
    body('ProjectType').isLength({ min: 5 }).withMessage('Project Type must be at least 5 characters long'),
    body('ProjectExpense').isNumeric().withMessage('Only numbers allowed for Project Expenses'),
    body('Expenses').isNumeric().withMessage('Please enter a valid number'),
    body('ExpensesName').notEmpty().withMessage('Expense name is required'),
    body('Budget').isNumeric().notEmpty().withMessage('Please provide the budget'),
    body('AdditionalBudgetName').notEmpty().withMessage('Please add additional budget name'),
    body('AdditionalBudget').notEmpty().isNumeric().withMessage('Please add additional budget amount'),
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
        const { ProjectManagerName,ProjectName, ProjectType,ProjectExpense, Expenses,ExpensesName,Budget,AdditionalBudgetName,AdditionalBudget, FromData, ToDate, StatusOfTheProject, Location, Priority } = req.body;
        const product = new Employeer({
            ProjectManagerName,
            ProjectName,
            ProjectType,
            ProjectExpense,
            Expenses,
            ExpensesName,
            Budget,
            AdditionalBudgetName,
            AdditionalBudget,
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
        const { ProjectManagerName,ProjectName, ProjectType,ProjectExpense, Expenses,ExpensesName,Budget,AdditionalBudgetName,AdditionalBudget, FromData, ToDate, StatusOfTheProject, Location, Priority } = req.body;
        let updatedProjectDetails = {};
        if (ProjectManagerName) updatedProjectDetails.ProjectManagerName = ProjectManagerName;
        if (ProjectName) updatedProjectDetails.ProjectName = ProjectName;
        if (ProjectType) updatedProjectDetails.ProjectType = ProjectType;
        if (ProjectExpense) updatedProjectDetails.ProjectExpense = ProjectExpense;
        if (Expenses) updatedProjectDetails.Expenses = Expenses;
        if (ExpensesName) updatedProjectDetails.ExpensesName = ExpensesName;
        if (Budget) updatedProjectDetails.Budget = Budget;
        if (AdditionalBudgetName) updatedProjectDetails.AdditionalBudgetName = AdditionalBudgetName;
        if (AdditionalBudget) updatedProjectDetails.AdditionalBudget = AdditionalBudget;
        if (FromData) updatedProjectDetails.FromData = FromData;
        if (ToDate) updatedProjectDetails.ToDate = ToDate;
        if (StatusOfTheProject) updatedProjectDetails.StatusOfTheProject = StatusOfTheProject;
        if (Location) updatedProjectDetails.Location = Location;
        if (Priority) updatedProjectDetails.Priority = Priority;

        const updatedDetails = await Employeer.findById(req.params.id);
        if (!updatedDetails) {
            return res.status(404).json({ error: 'Project not found' });
        }
        if (updatedDetails.user.toString() !== req.user) {
            return res.status(403).send({ error: 'Access Denied' });
        }

        const updated = await Employeer.findByIdAndUpdate(req.params.id, updatedProjectDetails, { new: true });
        res.status(200).json(updated);
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});

router.delete('/deleteTheProject/:id', findToken, async (req, res) => {
    try {
        const deleteProject = await Employeer.findById(req.params.id);
        if (!deleteProject) {
            return res.status(404).json({ error: 'Project not found' });
        }

        if (deleteProject.user.toString() !== req.user) {
            return res.status(403).json({ error: 'Access Denied' });
        }

        await Employeer.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
        console.error('Internal Error Occurred');
        res.status(500).send({ error: "Internal Server Error Occurred" });
    }
});

export default router;
