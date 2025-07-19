import cron from 'node-cron';
import axios from 'axios';

// 🗂️ Array of servers — extend this list anytime
const servers = [
  'https://ticky-api.onrender.com',
  'https://blog-app-ug77.onrender.com'
];

// ⏰ Schedule: every 5 minutes
cron.schedule('*/5 * * * *', () => {
  console.log(`\n🔄 Running health checks at ${new Date().toLocaleString()}...`);

  servers.forEach(async (serverUrl) => {
    try {
      const response = await axios.get(serverUrl);
      console.log(`✅ ${serverUrl} responded with status ${response.status}`);
    } catch (error) {
      console.error(`❌ ${serverUrl} failed: ${error.message}`);
    }
  });
});

console.log('🚀 Cron job is scheduled. It will ping servers every 5 minutes.');
