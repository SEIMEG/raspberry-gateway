export type GatewayConfig = {
  active_alarm: boolean;
  created_at: string;
  email_recipients: string[];
  id: string;
  max_alert_threshold: number;
  min_alert_threshold: number;
  name: string;
  sampling_interval: number;
};
