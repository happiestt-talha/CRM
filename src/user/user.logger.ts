import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(message: string, type: string = 'log') {
    console.log(`[${type}] ${message} at ${new Date().toISOString()}`);
  }

  warn(message: string) {
    this.log(message, 'warn');
  }

  error(message: string) {
    this.log(message, 'error');
  }

  debug(message: string) {
    this.log(message, 'debug');
  }
}
