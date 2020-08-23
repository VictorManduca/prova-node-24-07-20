'use strict'

export function ok(res, data) {
	return res.status(200).json(data).send()
}

export function created(res) {
	return res.status(201).send()
}

export function badRequest(res, error) {
	return res.status(400).json({ errorMessage: error }).send()
}