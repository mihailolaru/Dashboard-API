import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/user';

const app = express();

const port = process.env.PORT || 8000;

app.use((req, res, next) => {
	console.log('Time: ', Date.now());
	next();
});

app.get('/hello', (req, res) => {
	throw new Error('Something went wrong');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {	
	console.log('Error handler');
	res.status(401).send(err.message);
});

app.listen(port, () => {console.log('Listening on port ' + port)});