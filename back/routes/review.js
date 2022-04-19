const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController')

/**
 * 
 * GET ROUTES FOR REVIEWS
 * 
 */
router.get('/:id_usuario', reviewController.reviewByUsuario);
router.get('/:id_usuario/:id_producto', reviewController.reviewByUsuarioAndProducto);
router.get('/recientes', reviewController.getUltimasReviews);

 /**
 * 
 * POST ROUTES FOR REVIEWS
 * 
 */
router.post('/create', reviewController.createReview);


module.exports = router;