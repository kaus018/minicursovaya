import express from 'express'
import { register, login, getProfile } from '../controllers/authController.js'
import { protect } from '../middleware/auth.js'
import { 
  validateRegister, 
  validateLogin, 
  handleValidationErrors 
} from '../middleware/validation.js'

const router = express.Router()

// Public routes with validation
router.post('/register', validateRegister, handleValidationErrors, register)
router.post('/login', validateLogin, handleValidationErrors, login)

// Private routes
router.get('/profile', protect, getProfile)

export default router
