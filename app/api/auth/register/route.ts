import { NextRequest, NextResponse } from 'next/server';

// This is a mock database. In production, use a real database
const users: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { firstName, lastName, email, phone, password, isTrader, whatsapp, viber } = body;

    if (!firstName || !lastName || !email || !phone || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (basic check)
    if (phone.length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Create new user (in production, hash the password and save to database)
    const newUser = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      password, // NOTE: In production, NEVER store plaintext passwords. Use bcrypt or similar
      isTrader: isTrader || false,
      whatsapp: whatsapp || false,
      viber: viber || false,
      createdAt: new Date(),
    };

    users.push(newUser);

    // Return success response without password
    const { password: _, ...userWithoutPassword } = newUser;
    
    return NextResponse.json(
      {
        message: 'Registration successful',
        user: userWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
