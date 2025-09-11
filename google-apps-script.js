/**
 * ARDI Property Form Submission Handler
 * 
 * This Google Apps Script processes form submissions from the ARDI property website
 * and stores the data in a Google Sheet.
 */

// Spreadsheet where form submissions will be stored
// To get your spreadsheet ID:
// 1. Open your Google Sheet
// 2. Look at the URL: https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID_HERE/edit
// 3. Copy the ID portion and paste it below
const SPREADSHEET_ID = ''; // Add your Google Sheet ID here when created

// Note: If you leave this empty, a new spreadsheet will be created when you run the setup() function

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
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Address']);
    }
    
    // Format the current date and time
    const timestamp = new Date().toISOString();
    
    // Append the form data as a new row
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.address || ''
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
    message: 'The API is working! Use POST to submit form data.'
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
    phone: '+33 1 23 45 67 89',
    address: '123 Test Street, Test City'
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
 * Setup function to create a new spreadsheet if needed
 */
function setup() {
  // Create a new spreadsheet if SPREADSHEET_ID is not provided
  if (!SPREADSHEET_ID) {
    const newSpreadsheet = SpreadsheetApp.create('ARDHI Property Form Responses');
    const sheet = newSpreadsheet.getActiveSheet();
    sheet.setName('Form Responses');
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Address']);
    
    Logger.log('Created new spreadsheet with ID: ' + newSpreadsheet.getId());
    Logger.log('URL: ' + newSpreadsheet.getUrl());
  }
}
