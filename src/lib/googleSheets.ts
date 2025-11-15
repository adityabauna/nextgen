import { google } from 'googleapis';
import { readFileSync } from 'fs';
import { join } from 'path';

// Initialize Google Sheets API client
export async function getSheetsClient() {
  try {
    let credentials;

    // Option 1: Check for JSON string in environment variable (for Vercel/serverless)
    const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    
    if (credentialsJson) {
      // Use JSON string from environment variable (Vercel/serverless)
      try {
        credentials = JSON.parse(credentialsJson);
      } catch (parseError: any) {
        throw new Error(`Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON: ${parseError.message}`);
      }
    } else {
      // Option 2: Read from file (for local development)
      const keyFilePath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH || 
                         join(process.cwd(), 'google-service-account.json');

      try {
        const keyFileContent = readFileSync(keyFilePath, 'utf8');
        credentials = JSON.parse(keyFileContent);
      } catch (fileError: any) {
        if (fileError.code === 'ENOENT') {
          throw new Error(
            `Service account credentials not found.\n` +
            `For Vercel: Set GOOGLE_SERVICE_ACCOUNT_JSON environment variable in Vercel dashboard.\n` +
            `For local: Place google-service-account.json in project root or set GOOGLE_SERVICE_ACCOUNT_KEY_PATH.`
          );
        }
        throw new Error(`Failed to read or parse service account key file: ${fileError.message}`);
      }
    }

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create sheets client
    const sheets = google.sheets({ version: 'v4', auth });

    return sheets;
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error);
    throw error;
  }
}

/**
 * Append a row to Google Sheet
 */
export async function appendToSheet(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  try {
    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:F'; // Default to Sheet1

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID environment variable is not set');
    }

    // Get current timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata', // IST timezone
      dateStyle: 'short',
      timeStyle: 'medium',
    });

    // Prepare row data: [Timestamp, Name, Email, Phone, Subject, Message]
    const rowData = [
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.subject,
      data.message,
    ];

    // Append row to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('Row appended successfully:', response.data);
    return { success: true, updatedCells: response.data.updates?.updatedCells };
  } catch (error: any) {
    console.error('Error appending to Google Sheet:', error);
    throw new Error(`Failed to append to Google Sheet: ${error.message}`);
  }
}

/**
 * Get all rows from Google Sheet (for testing/verification)
 */
export async function getSheetData() {
  try {
    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:F';

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID environment variable is not set');
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return response.data.values || [];
  } catch (error: any) {
    console.error('Error reading from Google Sheet:', error);
    throw new Error(`Failed to read from Google Sheet: ${error.message}`);
  }
}

