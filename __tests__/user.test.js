'use strict'

import request from 'supertest'

import { mockUserRequest, mockUserIncorrectRequest } from './resources/user'
import server from '../src/server'

describe('User test', () => {
	test('insert a user', async done => {
		const body = mockUserRequest()

		await request(server)
			.post('/users')
			.send(body)
			.then(response => expect(response.status).toBe(201))
			.then(_ => done())
	})

	test('insert a user with incomplete body schema', async done => {
		const body = mockUserIncorrectRequest()

		await request(server)
			.post('/users')
			.send(body)
			.then(response => expect(response.status).toBe(400))
			.then(_ => done())
	})

	test('complete happy flow', async done => {
		const body = mockUserRequest()
		const bodyToUpdate = mockUserRequest()

		const userId = await request(server)
			.post('/users')
			.send(body)
			.then(response => {
				expect(response.status).toBe(201)

				return response.body.id
			})

		await request(server)
			.get(`/users/${ userId }`)
			.then(response => {
				expect(response.status).toBe(200)
				expect(response.body.name).toBe(body.name)
				expect(response.body.username).toBe(body.username)
				expect(response.body.email).toBe(body.email)
			})

		await request(server)
			.get('/users')
			.then(response => {
				expect(response.status).toBe(200)
				expect(response.body.length).not.toBe(0)
			})

		await request(server)
			.put(`/users/${ userId }`)
			.send(bodyToUpdate)
			.then(response => expect(response.status).toBe(200))

		await request(server)
			.get(`/users/${ userId }`)
			.then(response => {
				expect(response.status).toBe(200)
				expect(response.body.name).toBe(bodyToUpdate.name)
				expect(response.body.username).toBe(bodyToUpdate.username)
				expect(response.body.email).toBe(bodyToUpdate.email)
			})

		await request(server)
			.delete(`/users/${ userId }`)
			.then(response => expect(response.status).toBe(200))

		await request(server)
			.get(`/users/${ userId }`)
			.then(response => {
				expect(response.status).toBe(200)
				expect(response.body.length).toBeUndefined()

				return done()
			})
	})
})