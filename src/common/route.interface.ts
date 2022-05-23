import { NextFunction, Request, Response, Router } from 'express';

export interface IControllerRout {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	// Correct syntax. Creating an interface. There will be a syntax check for the Router methods.
	//method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' |'put'>
	// Error prone syntax. Static definition of verbs.
	method: 'get' | 'post' | 'delete' | 'patch' |'put';
}