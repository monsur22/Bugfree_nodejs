import express from 'express'
const router = express.Router()
import {index, home_create, home_create_view,home_edit,home_delete, about} from '../controller/adminController.js'

router.get('/', index)
router.get('/home-create', home_create_view)
router.post('/home-create', home_create)
router.get('/home-edit', home_edit)
router.get('/home-delete/(:id)', home_delete)

router.get('/about', about)

export default router