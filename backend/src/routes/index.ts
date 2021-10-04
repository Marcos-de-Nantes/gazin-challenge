import { Router } from 'express'
import { DeveloperController } from '../controllers/DeveloperController'

const router = Router()
const developers = new DeveloperController()

router.get('/developers', developers.show)
router.post('/developers', developers.create)
router.put('/developers', developers.update)
router.delete('/developers/:id', developers.remove)

export { router }
