import dotenv from 'dotenv';

import { MoocBackendApp } from './MoocBackendApp';

// Cargar variables de entorno desde .env
dotenv.config();

try {
	void new MoocBackendApp().start();
} catch (e) {
	process.exit(1);
}

process.on('uncaughtException', _err => {
	process.exit(1);
});
