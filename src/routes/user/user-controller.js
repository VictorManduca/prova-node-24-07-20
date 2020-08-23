'use strict'

import models from '../../models'
import * as callback from '../services/callback'

export async function create(req, res) {
	try {
		const body = { ...req.body }
		await models.user.create(body)

		return callback.created(res)
	} catch (error) {
		return callback.badRequest(res, error)
	}
}

export async function update(req, res) {
	try {
		const id = req.params.id
		const body = { ...req.body }
		await models.user.update(body, { where: { id: id } })

		return callback.ok(res, { message: 'User updated successfully' })
	} catch (error) {
		return callback.badRequest(res, error)
	}
}

export async function all(req, res) {
	try {
		const users = await models.user.findAll()

		return callback.ok(res, users)
	} catch (error) {
		return callback.badRequest(res, error)
	}
}

export async function destroy(req, res) {
	try {
		const id = req.params.id
		await models.user.destroy({ where: { id: id } })

		return callback.ok(res, { message: 'User deleted successfully' })
	} catch (error) {
		return callback.badRequest(res, error)
	}
}