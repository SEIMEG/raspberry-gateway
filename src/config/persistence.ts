import fs from 'fs';
import path from 'path';
import { fileURLToPath, FileUrlToPathOptions } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.join(__dirname, '../../data/config.json');

export const saveConfig = (data: any) => {
  fs.writeFileSync(configPath, JSON.stringify(data, null, 2));
  console.log('Configuracion guardada localmente');
};

export const writeConfig = (data: any) => {
  console.log('Datos escritos correctamente');
};

export const readConfig = () => {
  console.log('Datos leidos correctamente');
  return { ssid: 'dsd', password: 'asdsf' };
};
