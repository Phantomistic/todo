import { PrismaClient } from '@prisma/client';
import express, { Router } from 'express';
import { Request, Response } from 'express';


const todoController = require('../controllers/todoController')

const prisma = new PrismaClient();
const app = express();
const router = express.Router();



router.get('/',todoController.getTodos);

 
router.post('/addTodo',todoController.createTodo);


router.post('/updateTodo/:id',todoController.updateTodo)

router.delete('/deleteTodo/:id',todoController.deleteTodo);

module.exports = router;