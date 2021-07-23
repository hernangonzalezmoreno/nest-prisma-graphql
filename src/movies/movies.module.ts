import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { PrismaService } from 'src/prisma.service';
import { ActorsModule } from 'src/actors/actors.module';

@Module({
  providers: [MoviesResolver, MoviesService, PrismaService],
  imports: [ActorsModule]
})
export class MoviesModule {}
