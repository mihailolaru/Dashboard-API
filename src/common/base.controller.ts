import { Router, Response } from 'express'; 
import { LoggerService } from '../logger/logger.service';
export { Router } from 'express';
import { IControllerRout } from './route.interface'

export abstract class BaseController{
	private readonly _router: Router;

	constructor(private logger: LoggerService){
		this._router = Router();
	}

	get router(){
		return this._router;
	}

	public send<T>(res: Response, code: number, message: T){
		res.type('application/json');
		return res.status(code).json(message);
	}

	public ok<T> (res: Response, message: T){
		return this.send<T>(res, 200, message);
	}

	public create(res: Response){
		return res.sendStatus(201);
	}

	//Can also integrate error sending here etc.

	protected bindRoutes(routes: IControllerRout[]){
		for(const route of routes){
			this.logger.log(`[${route.method}] ${route.path}`);
			//using bind to bind the context of the current class with the 'route.func' (express function's)
			const handler = route.func.bind(this);
			this.router[route.method](route.path, handler);
		}

	}
} 