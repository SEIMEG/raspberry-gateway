import { getDataBTAllDevices } from '../bluetooth/scanner.js';
import { insertTelemetry } from '../database/supabaseClient.js';
import { configEvents } from '../config/configEvents.js';
import { GatewayConfig } from '../types/gatewayConfig.js';

let pollerInterval: NodeJS.Timeout | null = null;

export const startPolling = (_intervaloMuestreoMs: number = 60000) => {
  const intervaloMuestreoMs = _intervaloMuestreoMs * 1000;
  if (pollerInterval) clearInterval(pollerInterval);
  console.log(
    `[Poller] Inicando muestreo cada ${intervaloMuestreoMs / 1000} seg`,
  );
  pollerInterval = setInterval(async () => {
    console.log('[Poller] Muestreando sensores...');
    try {
      const datosSensores = await getDataBTAllDevices();
      for (const dato of datosSensores) {
        await insertTelemetry({
          publisher: dato.publisher,
          value: dato.value,
          name: dato.name,
        });
        console.log(
          `[Poller] Enviando: sensor ${dato.publisher}, temp ${dato.value}`,
        );
      }
    } catch (error) {
      console.log('[Poller] Error al muestrear / enviar ', error);
    }
  }, intervaloMuestreoMs);
};

configEvents.on('configChanged', async (data: GatewayConfig) => {
  startPolling(data.sampling_interval);
});
