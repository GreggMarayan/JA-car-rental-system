import express from 'express';
import { PrismaClient } from '@prisma/client';
import { login } from '../controllers/authController.js';

const router = express.Router();
const prisma = new PrismaClient();

// Login route
router.post('/login', login);

// Debug route to list all users (remove in production)
router.get('/debug/users', async (req, res) => {
  try {
    const users = await prisma.customer.findMany({
      select: {
        customer_id: true,
        username: true,
        email: true,
        first_name: true,
        last_name: true,
        status: true
      }
    });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export default router;
