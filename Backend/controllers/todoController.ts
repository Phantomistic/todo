import { PrismaClient } from '@prisma/client';
import express, { Router } from 'express';
import { Request, Response } from 'express';
import {updateUser} from './authController'

const prisma = new PrismaClient();
const app = express();

const getTodos = async (req: Request, res: Response) => {
    try {
      const todos = await prisma.todo.findMany({
        where: {
          userId: req.params.userEmail,
        },
      });
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Could not get todos' });
    }
  };

  const createTodo = async (req: Request, res: Response) => {
    const { title, description, userId } = req.body;
    try {
      const newTodo = await prisma.todo.create({
        data: {
          title,
          description,
          userId: userId,
        },
      });
      const updatedUser = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          todos:{
            connect:{
                id:newTodo.id
            }
          }
        },
      });
      res.json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'Could not create todo' });
    }
  };

  const updateTodo = async (req: Request, res: Response) => {
    const { id, title, description, completed } = req.body;
    try {
      const updatedTodo = await prisma.todo.update({
        where: {
          id: id,
        },
        data: {
          title,
          description,
          completed,
        },
      });
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Could not update todo' });
    }
  };

  const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await prisma.todo.delete({
        where: {
          id: id,
        },
      });
      res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Could not delete todo' });
    }
  };



  module.exports={
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
  }