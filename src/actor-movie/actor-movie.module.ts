import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ActorMovieService } from './actor-movie.service';

@Module({
    providers: [ActorMovieService, PrismaService],
    exports: [ActorMovieService],
})
export class ActorMovieModule {}
