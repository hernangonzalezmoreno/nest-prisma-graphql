import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsResolver } from './actors.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ActorsResolver, ActorsService, PrismaService]
})
export class ActorsModule {}
