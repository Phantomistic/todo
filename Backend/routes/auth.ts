import express, { Router } from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient()
const app = express();
const router = express.Router();
const authController = require('../controllers/authController')

router.get('/', authController.getUsers)
router.post('/register', authController.registerController)
router.post('/login', authController.loginController)
router.post('/update/:id', authController.updateUser)

module.exports= router;