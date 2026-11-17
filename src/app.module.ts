import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module.js';


@Module({
  imports: [ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
