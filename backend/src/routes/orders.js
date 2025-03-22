import express from 'express';
import orders from '../controllers/orderscontroller.js';

const router = express.Router();

router.router('/')
      .get(orders.getorders)
      .post(orders.createorder);

router.router('/:id')
      .put(orders.updateorder)
      .delete(orders.deleteorder);

export default router;
    