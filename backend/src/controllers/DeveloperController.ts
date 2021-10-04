import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { DevelopersRepository } from '../repositories/DevelopersRepository'
import { AppError } from '../errors/AppError'
import moment from 'moment'
import * as yup from 'yup'

class DeveloperController {
    async show(request: Request, response: Response): Promise<Response> {
        const options = request.query

        const developers = getCustomRepository(DevelopersRepository)

        const data = await developers.find({ where: options })

        return response.json(data)
    }

    async create(request: Request, response: Response): Promise<Response> {
        const {
            name,
            gender,
            hobby,
            birthdate
        } = request.body

        const schema = yup.object().shape({
            name: yup.string().required(),
            gender: yup.string().required(),
            hobby: yup.string().required(),
            birthdate: yup.date().required()
        })

        try {
            await schema.validate(request.body, { abortEarly: false })
        } catch (error) {
            throw new AppError(error)
        }

        const developers = getCustomRepository(DevelopersRepository)

        const developerAlreadyExists = await developers.findOne({ where: { name } })

        if (developerAlreadyExists) { throw new AppError('Developer already exists') }

        const age = moment().diff(moment(birthdate, 'YYYY-MM-DD'), 'years')

        const infos = developers.create({
            name,
            gender,
            age,
            hobby,
            birthdate
        })

        try {
            await developers.save(infos)

            return response.status(201).json(true)
        } catch (error) {
            throw new AppError(`Error creating new developer: ${error}`)
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        const infos = request.body

        const developers = getCustomRepository(DevelopersRepository)

        const newAge = moment().diff(moment(infos.birthdate, 'YYYY-MM-DD'), 'years')

        try {
            await developers.save({
                age: newAge,
                ...infos
            })

            return response.status(200).json(true)
        } catch (error) {
            throw new AppError(`Error updating developer: ${error}`)
        }
    }

    async remove(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const developers = getCustomRepository(DevelopersRepository)

        const developersExists = await developers.findOne({ where: { id } })

        if (developersExists) {
            try {
                await developers.delete(id)

                return response.status(204).json(true)
            } catch (error) {
                throw new AppError('Error removing developer')
            }
        } else {
            throw new AppError('Developer not found')
        }
    }
}

export { DeveloperController }
