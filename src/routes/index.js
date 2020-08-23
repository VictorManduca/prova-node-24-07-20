'use strict'

import express from 'express'

import * as userController from './user/user-controller'

const routes = express.Router()

routes.post('/users', userController.create)
routes.put('/users/:id', userController.update)
routes.get('/users', userController.all)
routes.delete('/users/:id', userController.destroy)

export default routes