import express from 'express'
const router = express.Router()
import {index, home_create, home_create_view} from '../controller/adminController.js'

router.get('/', index)
router.get('/home-create', home_create_view)
router.post('/home-create', home_create)

export default router