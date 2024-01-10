import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CheckTokenMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(req.headers);
    if (req.body.token != null) {
        next();
    } else {
        return res.status(403).json({ message: "no greeting passed or not equal to hello " });
    }
  }
}