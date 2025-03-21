import express from 'express';
import category from '../controllers/category.js';

const router = express.Router();

router.get('/')
    .get(category.getcategory)
    .post(category.createcategory);
    
router.get('/:id')
    .put(category.updatecategory)
    .delete(category.deletecategory);

export default router;
