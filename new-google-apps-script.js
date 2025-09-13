/**
 * MAZED Property Form Submission Handler for Bouasida Property
 * 
 * This Google Apps Script processes form submissions from the MAZED property website
 * and stores the data in a Google Sheet.
 */

// Spreadsheet where form submissions will be stored
// Google Sheet ID for the Bouasida property
const SPREADSHEET_ID = '1k-Jlau-fZl6YeMoCmQZH1v8ChdEap-iLTQEPKnstP6I';

// Process the incoming form data
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet and active sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID) || SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('Form Responses') || spreadsheet.getActiveSheet();
    
    // Set headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Address', 'Property']);
    }
    
    // Format the current date and time
    const timestamp = new Date().toISOString();
    
    // Append the form data as a new row
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.address || '',
      'Appartement S+2 Bouasida' // Specify which property this form is for
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Data successfully added to spreadsheet'
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      result: 'error',
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (e.g., testing the API)
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    result: 'success',
    message: 'The API is working! Use POST to submit form data.',
    spreadsheetId: SPREADSHEET_ID,
    deploymentInfo: 'Deployment ID: AKfycbwAxW4aZT_YRqN3UtsmzHwLN4aabH1zja6iQ9_Ji4IGSHS7cJYk2a9nMRQ94xNmd07IKg',
    deploymentDate: 'Version 2 on Sep 13, 2025, 9:54 PM',
    libraryUrl: 'https://script.google.com/macros/library/d/1ndq6E-Zq6xd5UJ3-UzlhyWIRt9UqNYWH6u9k6ztv7JHHiPgKq2DhmP3X/2'
  }))
  .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Use this function to test the script functionality directly from the Apps Script editor
 */
function testScript() {
  // Sample form data
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+216 12 345 678',
    address: '123 Test Street, Bouasida'
  };
  
  // Create a mock event object
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  // Call the doPost function with the mock event
  const result = doPost(mockEvent);
  
  // Log the result
  Logger.log(result.getContent());
}

/**
 * Setup function to initialize the spreadsheet
 */
function setup() {
  // Get the existing spreadsheet
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  
  if (spreadsheet) {
    // Try to get the Form Responses sheet or create it if it doesn't exist
    let sheet = spreadsheet.getSheetByName('Form Responses');
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Form Responses');
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Address', 'Property']);
    }
    
    // Log success
    Logger.log('Spreadsheet setup complete.');
    Logger.log('URL: ' + spreadsheet.getUrl());
  } else {
    Logger.log('Error: Could not open spreadsheet with ID: ' + SPREADSHEET_ID);
  }
}

/**
 * Deployment Information:
 * 
 * Current Deployment:
 * - Deployment ID: AKfycbwAxW4aZT_YRqN3UtsmzHwLN4aabH1zja6iQ9_Ji4IGSHS7cJYk2a9nMRQ94xNmd07IKg
 * - Version 2 on Sep 13, 2025, 9:54 PM
 * - Web app URL: https://script.google.com/macros/s/AKfycbwAxW4aZT_YRqN3UtsmzHwLN4aabH1zja6iQ9_Ji4IGSHS7cJYk2a9nMRQ94xNmd07IKg/exec
 * - Library URL: https://script.google.com/macros/library/d/1ndq6E-Zq6xd5UJ3-UzlhyWIRt9UqNYWH6u9k6ztv7JHHiPgKq2DhmP3X/2
 * - Google Sheet ID: 1k-Jlau-fZl6YeMoCmQZH1v8ChdEap-iLTQEPKnstP6I
 */
