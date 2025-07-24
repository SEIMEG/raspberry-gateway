import { supabase } from './supabaseClient.js';
import { saveConfig } from '../config/persistence.js';

export const fetchGatewayConfig = async () => {
  const { data, error } = await supabase.from('gateway').select('*').single();
  if (error) console.log('Error config:', error);
  else {
    console.log('Configuracion obtenida', data);
    saveConfig(data);
  }
};
