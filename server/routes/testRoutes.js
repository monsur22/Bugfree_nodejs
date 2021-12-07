import express from 'express'
const router = express.Router()
import {index,views,home,create} from '../controller/homeController.js'

router.get('/', index)
router.get('/views', views)
router.get('/home', home)
router.post('/home/create', create)


export default router