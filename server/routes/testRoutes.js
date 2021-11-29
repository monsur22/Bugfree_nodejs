import express from 'express'
const router = express.Router()
import {index,views} from '../controller/homeController.js'

router.get('/', index)
router.get('/views', views)


export default router