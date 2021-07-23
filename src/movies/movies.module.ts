import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { PrismaService } from 'src/prisma.service';
import { ActorsService } from 'src/actors/actors.service';

@Module({
  providers: [MoviesResolver, MoviesService, ActorsService, PrismaService]
})
export class MoviesModule {}
