import { supabase } from './supabaseClient.js';
import { saveRemoteConfig } from '../config/persistence.js';
import { configEvents } from '../config/configEvents.js';
import { GatewayConfig } from '../types/gatewayConfig.js';

export const initGatewayConfig = async () => {
  const data = await fetchGatewayConfig();
  listenGatewayConfig();
  return data;
};

const fetchGatewayConfig = async () => {
  const { data, error } = await supabase
    .from('gateway')
    .select('*')
    .eq('id', '3A:4B:5C:12:F3')
    .single();
  if (error) {
    console.log('[FETCH GATEWAY CONFIG] Error config:', error);
    throw new Error('Error al obtener la configuracion');
  }
  try {
    await saveRemoteConfig(data);
    console.log(
      '[FETCH GATEWAY CONFIG] Configuracion obtenida y guardada',
      data,
    );
    const _data: GatewayConfig = data;
    return _data;
  } catch (err) {
    console.log('[FETCH GATEWAY CONFIG] Error al guardar localmente:', err);
    throw new Error('No se pudo guardar la configuración localmente');
  }
};

const listenGatewayConfig = () => {
  const channel = supabase
    .channel('gateway-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'gateway',
        filter: 'id=eq.3A:4B:5C:12:F3',
      },
      async (payload) => {
        console.log(payload);
        if (payload.new) {
          await saveRemoteConfig(payload.new);
          configEvents.emit('configChanged', payload.new);
          console.log('[REALTIME] Configuracion obtenida y guardada');
        }
      },
    )
    .subscribe();

  return channel;
};
