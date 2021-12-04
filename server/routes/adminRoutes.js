import express from 'express'
const router = express.Router()
import {index} from '../controller/adminController.js'

router.get('/', index)

export default router