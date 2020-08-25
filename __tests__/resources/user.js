'use strict'

import { v1 as uuidv1 } from 'uuid'

export function mockUserRequest() {
	return {
		name: uuidv1(),
		username: uuidv1(),
		email: uuidv1()
	}
}

export function mockUserIncorrectRequest() {
	return {
		name: uuidv1(),
		username: uuidv1()
	}
}