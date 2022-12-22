import express, { Router } from 'express';
import {Todo} from '../models/todo';
const todos = [];

router.get('/',(req,res,next) => {
    res.status(200).json({todos: todos});
})

const router = Router();

export default router;