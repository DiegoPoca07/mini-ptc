import express from 'express';
import shoppingcart from '../controllers/shoppingcartcontroller.js';

const router = express.Router();

router.route('/')
   .get(shoppingcart.getCart)
   .post(shoppingcart.addProduct)

   .route('/:id')
   .put(shoppingcart.updateProduct)
   .delete(shoppingcart.deleteProduct);
   
export default router;
