import express from 'express';
import orders from '../controllers/orders';

const router = express.Router();

router.router('/')
      .get(admi.getorders)
      .post(admi.createorder);

router.router('/:id')
      .put(admi.updateorder)
      .delete(admi.deleteorder);

export default router;
    