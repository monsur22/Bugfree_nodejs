import express from 'express'
const router = express.Router()
import {index} from '../controller/homeController.js'

router.get('/', index)


export default router