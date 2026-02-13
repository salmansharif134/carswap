import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Here you could send an email, save to database, etc.
    // For now, just log the data and return success
    console.log('Contact form submission:', body);

    // Validate required fields
    const { lastName, firstName, email } = body;
    if (!lastName || !firstName || !email) {
      return NextResponse.json(
        { error: 'Hiányzó kötelező mezők' },
        { status: 400 }
      );
    }

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Üzenet sikeresen elküldve!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Szerver hiba történt' },
      { status: 500 }
    );
  }
}