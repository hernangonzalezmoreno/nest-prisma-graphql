import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';
import { ActorMovieModule } from './actor-movie/actor-movie.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    UsersModule,
    MoviesModule,
    ActorsModule,
    ActorMovieModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
