import { startPolling } from './scheduler/poller.js';
import { initiBluettoth } from './bluetooth/scanner.js';
// import { initSupabase } from './database/supabaseClient.js';
import { fetchGatewayConfig } from './database/gatewayConfig.js';
import { setupWebSocket } from './comms/webSocketClient.js';
import { setupMQTT } from './comms/mqttClient.js';
import { initWiFi } from './config/wifiManager.js';

const main = () => {
  //   initWiFi();
  // await  initSupabase();
  fetchGatewayConfig();
  //   initiBluettoth();
  //   setupMQTT();
  //   setupWebSocket;
  startPolling();
};
main();
console.log('Gateway iniciado');
