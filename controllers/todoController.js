

import Todo from '../models/Todo.js';

export const createTodo = async (req, res)=>{
    // Data that is passed by frontend is inside the request's body!
    try {
        const todo = await Todo.create(req.body);   // "req.body = {title: "Do coding"}"
        res.status(201).json({todo});

    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};

export const getTodos = async (req, res)=>{
    try {
        const todos = await Todo.find();
        res.status(200).json({data: todos});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

export const updateTodo = async (req, res) =>{
    try {
        // 1. find 
        // req.body = update panna vendiya data
        // req.params.id = particular todo voda id irukum
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true});
        res.status(200).json({updated_data: todo});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};

export const deleteTodo = async(req, res) =>{
    try {
        // 1. find 
        // req.params.id = particular todo voda id irukum
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: "Todo deleted successfully"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};