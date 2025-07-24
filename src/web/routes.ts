import express from 'express';
import { readConfig, writeConfig } from '../config/persistence.js';

export const router = express.Router();

router.get('/wifi', async (_, res) => {
  const config = await readConfig();
  res.json({ ssid: config.ssid || '', password: config.password || '' });
});

router.post('/wifi', async (req, res) => {
  const { ssid, password } = req.body;
  if (!ssid || !password)
    return res.status(400).json({ error: 'Missing data' });
  await writeConfig({ ssid, password });
  res.json({ success: true });
});
