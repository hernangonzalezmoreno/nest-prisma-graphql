import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { MoviesModule } from './movies/movies.module';
import { ActorsService } from './actors/actors.service';
import { ActorMovieService } from './actor-movie/actor-movie.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    UsersModule,
    MoviesModule
  ],
  controllers: [AppController],
  providers: [AppService, ActorsService, ActorMovieService],
})
export class AppModule {}
