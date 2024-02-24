import express from "express";

const router = express.Router();

import  {bookController}  from "../controllers/bookController.js";

router.get("/books", bookController.allBooks);
router.get("/books/:id", bookController.getById);
router.post("/books", bookController.createBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id",  bookController.deleteBook);


export const booksRoute = router;
