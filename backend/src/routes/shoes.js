import express from 'express';
import  shoes from "../controllers/shoes.js";

const router = express.Router();

router.route('/')
    .get(shoes.getShoes)
    .post(shoes.createShoes);
    
router.route('/:id')
    .put(shoes.updateShoes)
    .delete(shoes.deleteShoes);
    
export default router;