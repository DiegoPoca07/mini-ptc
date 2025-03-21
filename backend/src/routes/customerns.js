import express from 'express';
import customerns from '../controllers/customernscontroller.js';

const router = express.Router();

router.route('/')
    .get(customerns.getCustomers)
    .post(customerns.createCustomer);
    
router.route('/:id')
    .put(customerns.updateCustomer)
    .delete(customerns.deleteCustomer);
    
export default router;