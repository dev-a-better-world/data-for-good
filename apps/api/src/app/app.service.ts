import { Injectable } from '@nestjs/common';
import { Message } from '@data-for-good/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
