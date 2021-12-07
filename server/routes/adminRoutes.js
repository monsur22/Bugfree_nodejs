import express from 'express'
const router = express.Router()
import {index, create} from '../controller/adminController.js'

router.get('/', index)
router.post('/home/create', create)

export default router