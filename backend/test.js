const http = require('http');

const BASE_URL = 'http://localhost:3000';

// Helper function to make HTTP requests
function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const req = http.get(`${BASE_URL}${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve({
            statusCode: res.statusCode,
            data: JSON.parse(data),
          });
        } catch (e) {
          resolve({
            statusCode: res.statusCode,
            data: data,
          });
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Test cases
async function runTests() {
  console.log('🧪 Starting API Tests...\n');

  try {
    // Test 1: Get all houses
    console.log('📋 Test 1: GET /houses (all houses)');
    const allHouses = await makeRequest('/houses');
    console.log(`   Status: ${allHouses.statusCode}`);
    console.log(`   Houses returned: ${allHouses.data.length}`);
    console.log(
      `   House names: ${allHouses.data.map((h) => h.name).join(', ')}\n`
    );

    // Test 2: Filter by "ffi" (should return Gryffindor and Hufflepuff)
    console.log('🔍 Test 2: GET /houses?name=ffi');
    const ffiHouses = await makeRequest('/houses?name=ffi');
    console.log(`   Status: ${ffiHouses.statusCode}`);
    console.log(`   Houses returned: ${ffiHouses.data.length}`);
    console.log(
      `   House names: ${ffiHouses.data.map((h) => h.name).join(', ')}\n`
    );

    // Test 3: Filter by "sly" (should return Slytherin)
    console.log('🐍 Test 3: GET /houses?name=sly');
    const slyHouses = await makeRequest('/houses?name=sly');
    console.log(`   Status: ${slyHouses.statusCode}`);
    console.log(`   Houses returned: ${slyHouses.data.length}`);
    console.log(
      `   House names: ${slyHouses.data.map((h) => h.name).join(', ')}\n`
    );

    // Test 4: Filter by "xyz" (should return empty array)
    console.log('❌ Test 4: GET /houses?name=xyz (no matches)');
    const noMatches = await makeRequest('/houses?name=xyz');
    console.log(`   Status: ${noMatches.statusCode}`);
    console.log(`   Houses returned: ${noMatches.data.length}\n`);

    // Test 5: Get specific house by ID
    console.log('🦁 Test 5: GET /houses/:id (Gryffindor)');
    const gryffindorId = '0367baf3-1cb6-4baf-bede-48e17e1cd005';
    const specificHouse = await makeRequest(`/houses/${gryffindorId}`);
    console.log(`   Status: ${specificHouse.statusCode}`);
    console.log(`   House name: ${specificHouse.data.name}\n`);

    // Test 6: Health check
    console.log('💚 Test 6: GET /health');
    const health = await makeRequest('/health');
    console.log(`   Status: ${health.statusCode}`);
    console.log(`   Response: ${health.data.status}\n`);

    // Test 7: 404 test
    console.log('🚫 Test 7: GET /invalid-route (404 test)');
    const notFound = await makeRequest('/invalid-route');
    console.log(`   Status: ${notFound.statusCode}`);
    console.log(`   Error: ${notFound.data.error}\n`);

    console.log('✅ All tests completed successfully!');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n💡 Make sure the server is running on port 3000');
    console.log('   Run: npm start');
  }
}

// Check if server is running first
console.log('🔍 Checking if server is running...');
makeRequest('/health')
  .then(() => {
    console.log('✅ Server is running!\n');
    runTests();
  })
  .catch(() => {
    console.log('❌ Server is not running!');
    console.log('💡 Please start the server first with: npm start\n');
  });
