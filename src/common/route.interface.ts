import { NextFunction, Request, Response } from 'express';

export interface IRoute {
	path: string;
	funct: ()
}