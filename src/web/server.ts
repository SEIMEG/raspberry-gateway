import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { router } from './routes.js';

export const initWebAppConfig = () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const app = express();
  app.use(express.json());

  app.use('/api', router);

  app.use(express.static(path.join(__dirname, '../public')));

  const PORT = 8008;
  app.listen(PORT, () => {
    console.log(
      `[Web Config] Interfaz web disponible en http://localhost:${PORT}`,
    );
  });
};
