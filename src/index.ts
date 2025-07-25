import { startPolling } from './scheduler/poller.js';
// import { initiBluettoth } from './bluetooth/scanner.js';
import { initGatewayConfig } from './database/gatewayConfig.js';
// import { initWebAppConfig } from './web/server.js';
// import { setupWebSocket } from './comms/webSocketClient.js';
// import { setupMQTT } from './comms/mqttClient.js';
// import { initWiFi } from './config/wifiManager.js';

const main = async () => {
  //   initWiFi();
  // await fetchGatewayConfig();
  const initialDataConfig = await initGatewayConfig();
  //   initiBluettoth();
  //   setupMQTT();
  //   setupWebSocket;
  // initWebAppConfig();
  startPolling(initialDataConfig.sampling_interval);
};
main();
console.log('Gateway iniciado');
