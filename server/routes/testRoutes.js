import express from 'express'
const router = express.Router()
import {index,views,home} from '../controller/homeController.js'

router.get('/', index)
router.get('/views', views)
router.get('/home', home)


export default router