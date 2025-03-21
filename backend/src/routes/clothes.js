import express from 'express';
import clothescontroller from '../controllers/clothes.js';

const router = express.Router();

router.route('/')
    .get(clothescontroller.getClothes)
    .post(clothescontroller.createClothes);

router.route('/:id')
    .put(clothescontroller.updateClothes)
    .delete(clothescontroller.deleteClothes);
    
export default router;