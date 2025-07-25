import fs from 'fs';
import path from 'path';

const wifiPath = path.join(__dirname, '../data/config.json');

export const initWiFi = () => {
  if (fs.existsSync(wifiPath)) {
    const config = JSON.parse(fs.readFileSync(wifiPath, 'utf-8'));
    console.log('Conectado a WiFi:', config.ssid);
  } else {
    console.warn('No se encontro configuracion WiFi');
  }
};
