import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import { createProduct, deleteProduct, getProduct, getProductOne, updateProduct } from '../controllers/product.controller.js'


const router = Router()

//definir rutas
router.get('/api/product', authRequired, getProduct);
router.post('/api/product', authRequired, createProduct);

//definir rutas con id
router.get('/api/product/:id', authRequired, getProductOne)
router.delete('/api/product/:id', authRequired, deleteProduct)
router.put('/api/product/:id', authRequired, updateProduct)

export default router;