import express, { Express } from  'express';
import { userRouter } from './users/users';
import { Server } from 'http';
import { LoggerService } from 'logger/logger.service';

export class App {
	app: Express;
	server: Server;
	port: number;
	logger: LoggerService;

	constructor( logger: LoggerService){
		this.app = express();
		this.port = 8000;
		this.logger = logger;
	}

	useRouters(){
		this.app.use('/users', userRouter);
	}

	public async init(){
		this.useRouters();
		this.server = this.app.listen(this.port);
		console.log(`Server is running on ${this.port}`);
	}
}