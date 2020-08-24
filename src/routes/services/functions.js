'use strict'

import Ajv from 'ajv'

export function validate(schema, data) {
	const ajv = new Ajv()

	return ajv.validate(schema, data) ? true : ajv.errors
}