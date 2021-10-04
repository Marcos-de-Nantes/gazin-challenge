import request from 'supertest'
import { app } from '../app'
import createConnection from '../database'

describe('Developers', () => {
    beforeAll(async () => {
        const connection = await createConnection()

        await connection.runMigrations()
    })

    it('Should be able to get all developers', async () => {
        const response = await request(app).get('/developers')

        expect(typeof response.body).toBe('object')
        expect(response.status).toBe(200)
    })

    it('Should be able to creat a new developer', async () => {
        const response = await request(app).post('/developers')
            .send({
                name: 'Teste',
                gender: 'M',
                hobby: 'Hobby teste',
                birthdate: '1990/01/01'
            })

        expect(response.status).toBe(201)
        expect(response.body).toBe(true)
    })

    it('Should not be able to creat a new developer with the same name', async () => {
        const response = await request(app).post('/developers')
            .send({
                name: 'Teste',
                gender: 'M',
                hobby: 'Hobby teste',
                birthdate: '1990/01/01'
            })

        expect(response.status).toBe(400)
        expect(response.body).not.toBe(true)
    })

    it('Should not be able to creat a new developer whithout a name', async () => {
        const response = await request(app).post('/developers')
            .send({
                gender: 'M',
                hobby: 'Hobby teste',
                birthdate: '1990/01/01'
            })

        expect(response.status).toBe(400)
    })
})
