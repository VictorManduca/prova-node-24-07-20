'use strict'

import * as callback from '../services/callback'
import { validate } from '../services/functions'
import models from '../../models'
import userSchema from '../schemas/user-schema.json'

export async function create(req, res) {
	try {
		const body = { ...req.body }

		const validator = validate(userSchema, body)
		if (validator !== true)
			return callback.badRequest(res, validator)

		const user = await models.user.create(body)

		return callback.created(res, user.dataValues.id)
	} catch (error) {
		return callback.badRequest(res, error)
	}
}

export async function update(req, res) {
	try {
		const id = req.params.id
		const body = { ...req.body }

		const validator = validate(userSchema, body)
		if (validator !== true)
			return callback.badRequest(res, validator)

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

export async function one(req, res) {
	try {
		const id = req.params.id
		const user = await models.user.findOne({ where: { id: id } })

		return callback.ok(res, user ? user : new Object())
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