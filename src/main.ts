import { App } from './app';
import { LoggerService } from 'logger/logger.service'

async function bootstrap() {
	// Dep. injection. App is dependent of LoggerService
	const app = new App(new LoggerService());
	await app.init();
}

bootstrap();