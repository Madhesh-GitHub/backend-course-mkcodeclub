<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=36&duration=2500&pause=900&color=7C3AED&center=true&vCenter=true&width=700&lines=Todo+API+%F0%9F%93%8A;RESTful+Backend+%F0%9F%9A%80;Express+%2B+MongoDB+%F0%9F%94%A5" alt="Todo API banner" />

  <p>
    <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
    <img alt="Express" src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
    <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
    <img alt="dotenv" src="https://img.shields.io/badge/dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white" />
  </p>
</div>

A REST API for managing todo items, built as part of the backend development course on the **MK Code Club** YouTube channel.

## Overview

This project provides a simple, clean backend for creating, reading, updating, and deleting todo items with a MongoDB-powered data layer.

## Features

- Create and store todo items
- Fetch all todos or a single item by ID
- Update todo status and content
- Delete records from the database
- Built-in health check endpoint
- Automatic timestamps for creation and updates

## Stack

- Node.js and Express
- MongoDB with Mongoose
- dotenv for environment configuration

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/todoDB
   ```

   Replace the MongoDB URI with your local or hosted database connection string.

3. Start the development server:

   ```bash
   npm run dev
   ```

The API runs at `http://localhost:3000` (or the port set in `.env`). Send JSON request bodies with the `Content-Type: application/json` header.

## API

Base path: `/api/todos`

| Method | Endpoint | Description | Body |
| --- | --- | --- | --- |
| `POST` | `/api/todos` | Create a todo | `{ "title": "Learn Express" }` |
| `GET` | `/api/todos` | Get all todos | — |
| `PUT` | `/api/todos/:id` | Update a todo | `{ "title": "Learn Express", "isDone": true }` |
| `DELETE` | `/api/todos/:id` | Delete a todo | — |
| `GET` | `/api/health-check` | Check server status | — |

Each todo has a required `title`, an `isDone` flag (defaults to `false`), and automatically managed `createdAt` and `updatedAt` timestamps.

## 🎓 Course

Follow along with the backend development lessons on [MK Code Club](https://www.youtube.com/@MKCodeClub).

---

<div align="center">
  <img src="https://img.shields.io/badge/Status-Ready%20to%20Build-00C853?style=flat-square" alt="Project status" />
</div>
