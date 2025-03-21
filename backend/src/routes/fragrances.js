import express from 'express';
import fragrance from '../controllers/fragrancescontroller.js';

const router = express.Router();

router.route('/')
    .get(fragrance.getFragrances)
    .post(fragrance.createFragrance);
    
router.route('/:id')
    .put(fragrance.updateFragrance)
    .delete(fragrance.deleteFragrance);
    
export default router;