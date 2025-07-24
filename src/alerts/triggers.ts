import { sendEmailAlert } from './email.js';
export const checkTemperautraAlert = (temp: number) => {
  if (temp > 30) {
    sendEmailAlert('Alerta de temperatura', `Temperatura alta: ${temp}°C`);
  }
};
