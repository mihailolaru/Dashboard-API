import { Logger } from 'tslog';

export class LoggerService {
	
	//vars
	public logger: Logger;
	
	//constructor
	constructor(){
		this.logger = new Logger({
			displayInstanceName: false,
			displayLoggerName: false,
			displayFilePath: 'hidden',
			displayFunctionName: false
		});
	}

		//methods
		log(...args: unknown[]){
			this.logger.info(...args);
		}

		error(...args: unknown[]){
			// ex for sending err with sentry / rollbar
			this.logger.error(...args);
		}

		warn(...args: unknown[]){
			this.logger.warn(...args);
		}	
}