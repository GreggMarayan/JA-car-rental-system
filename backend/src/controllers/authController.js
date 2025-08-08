import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt for username:', username);

    // First try to find in Admin table
    const admin = await prisma.admin.findFirst({
      where: {
        username: {
          equals: username.trim(),
          mode: 'insensitive',
        },
      },
    });

    // If not found in Admin, try Customer table
    const user = admin || await prisma.customer.findFirst({
      where: {
        username: {
          equals: username.trim(),
          mode: 'insensitive',
        },
      },
    });

    console.log('Found user:', user ? `Yes (${admin ? 'Admin' : 'Customer'})` : 'No');

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

    const isAdmin = !!admin;
    const userIdField = isAdmin ? 'admin_id' : 'customer_id';
    const userType = isAdmin ? 'admin' : 'customer';

    // Create JWT token
    const token = jwt.sign(
      { 
        id: user[userIdField],
        username: user.username,
        email: user.email,
        role: userType
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user;
    
    res.json({
      token,
      user: {
        id: user[userIdField],
        username: user.username,
        email: user.email,
        name: `${user.first_name} ${user.last_name}`,
        role: userType
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { login };
