import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apikey = req.headers['x-api-key'];
    if (!apikey || apikey !== '123456') {
      return res.status(401).send('Unauthorized');
    }
    next();
  }
}
