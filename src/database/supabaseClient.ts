import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);

type Data = {
  publisher: string;
  value: number;
  name: string | undefined | null;
};
export const insertTelemetry = async (data: Data) => {
  const { error } = await supabase.from('telemetry').insert(data);
  if (error) throw error;
};
