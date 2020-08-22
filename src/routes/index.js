import express from 'express'

import * as user from './user/user-controller'

const router = express.Router()

router.post('/drop/user', user.create)
router.get('/drop/user', user.all)

export default router