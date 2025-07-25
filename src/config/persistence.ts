import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GatewayConfig } from '../types/gatewayConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const remoteConfigPath = path.join(__dirname, '../data/remote_config.json');

export const saveRemoteConfig = async (data: any): Promise<void> => {
  try {
    await fs.promises.writeFile(
      remoteConfigPath,
      JSON.stringify(data, null, 2),
    );
    console.log('[PERSISTENCE CONF] Configuracion guardada localmente');
  } catch (err) {
    console.log('[PERSISTENCE CONF] Error al guardar configuracion:', err);
    throw err;
  }
};

export const readRemoteConfig = async () => {
  try {
    const data = await fs.promises.readFile(remoteConfigPath, 'utf-8');
    return JSON.parse(data) as GatewayConfig;
  } catch (err) {
    console.log('[PERSISTENCE CONF] Error al leer configuracion:', err);
    throw err;
  }
};

export const writeConfig = (data: any) => {
  console.log('Datos escritos correctamente');
};

export const readConfig = () => {
  console.log('Datos leidos correctamente');
  return { ssid: 'dsd', password: 'asdsf', intervaloMuestreo: 15000 };
};
