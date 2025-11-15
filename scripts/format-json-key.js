/**
 * Helper script to format Google Service Account JSON key for .env.local
 * 
 * Usage:
 *   node scripts/format-json-key.js path/to/your-service-account-key.json
 * 
 * This will output the JSON as a single-line string ready for .env.local
 */

const fs = require('fs');
const path = require('path');

// Get JSON file path from command line arguments
const jsonFilePath = process.argv[2];

if (!jsonFilePath) {
  console.error('❌ Error: Please provide the path to your JSON key file');
  console.log('\nUsage: node scripts/format-json-key.js path/to/key.json\n');
  process.exit(1);
}

try {
  // Read the JSON file
  const fullPath = path.resolve(jsonFilePath);
  const jsonContent = fs.readFileSync(fullPath, 'utf8');
  
  // Parse to validate it's valid JSON
  const jsonObj = JSON.parse(jsonContent);
  
  // Convert back to string (single line)
  const singleLineJson = JSON.stringify(jsonObj);
  
  console.log('\n✅ Formatted JSON key (copy this to your .env.local file):\n');
  console.log('GOOGLE_SERVICE_ACCOUNT_JSON=' + singleLineJson);
  console.log('\n✨ Done! Copy the line above to your .env.local file.\n');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

