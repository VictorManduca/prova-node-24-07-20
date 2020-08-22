import models from '../../models'

export async function create(req, res, next) {
  const body = { ...req.body }
  const user = await models.user.create(body)

  res.status(201).json(user.dataValues)
}

export async function all(req, res, next) {
  const users = await models.user.findAll()
  res.status(200).json(users)
}