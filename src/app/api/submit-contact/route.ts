import { NextRequest, NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/googleSheets';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic sanitization)
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    // Append to Google Sheet
    await appendToSheet(sanitizedData);

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
    });
  } catch (error: any) {
    console.error('Error in submit-contact API:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to submit form. Please try again later.',
      },
      { status: 500 }
    );
  }
}

