import express from 'express'
const router = express.Router()
import {index, create, home_create} from '../controller/adminController.js'

router.get('/', index)
router.get('/create', home_create)
router.post('/create', create)

export default router