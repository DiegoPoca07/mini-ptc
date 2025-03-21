import express from 'express';
import admi from "../controllers/admi.js";

const router = express.Router();

router.route('/')
    .get(admi.getAdmi)
    .post(admi.createAdmi);
    
router.route('/:id')
    .put(admi.updateAdmi)
    .delete(admi.deleteAdmi);
    
export default router;