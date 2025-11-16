import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, mobile, email, city, consent } = body;

    // Validation
    if (!name || !mobile || !email || !city) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: 'Please accept the terms and conditions' },
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

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      mobile: mobile.trim(),
      email: email.trim().toLowerCase(),
      city: city.trim(),
      consent: Boolean(consent),
    };

    // Save to database using Prisma
    await prisma.application.create({
      data: {
        name: sanitizedData.name,
        mobile: sanitizedData.mobile,
        email: sanitizedData.email,
        city: sanitizedData.city,
        consent: sanitizedData.consent,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully! Our team will contact you soon.',
    });
  } catch (error: any) {
    console.error('Error in submit-application API:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to submit application. Please try again later.',
      },
      { status: 500 }
    );
  }
}

