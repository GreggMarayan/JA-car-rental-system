import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt for username:', username);

    // Find user by username (case-insensitive search)
    const user = await prisma.customer.findFirst({
      where: {
        username: {
          equals: username.trim(),
          mode: 'insensitive',
        },
      },
    });

    console.log('Found user:', user ? 'Yes' : 'No');

    // Check if user exists
    if (!user) {
      console.log('User not found in database');
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    console.log('Comparing passwords - Input:', password, 'Stored:', user.password);
    // For now, we'll do a direct comparison since the seed data has plain text passwords
    // In production, you should use bcrypt.compare()
    if (password !== user.password) {
      console.log('Password does not match');
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Create JWT token
    const token = jwt.sign(
      { 
        id: user.customer_id,
        username: user.username,
        email: user.email,
        role: 'customer' 
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    // Return user data (excluding password) and token
    const { password: _, ...userWithoutPassword } = user;
    
    res.json({
      token,
      user: {
        id: user.customer_id,
        username: user.username,
        email: user.email,
        name: `${user.first_name} ${user.last_name}`,
        role: 'customer'
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { login };
