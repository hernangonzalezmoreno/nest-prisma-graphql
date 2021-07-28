import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { movies, actors } from '@prisma/client';
import { CreateActorArray } from 'src/actors/dto/create-actor-array.input';
import { ActorsService } from 'src/actors/actors.service';
import { ActorMovieService } from 'src/actor-movie/actor-movie.service';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {

  constructor(
    private actorService: ActorsService,
    private actorMovieService: ActorMovieService,
    private prisma: PrismaService
  ){}

  async create(createMovieInput: CreateMovieInput, createActorArray: CreateActorArray): Promise<movies> {
    let newActors: actors[] = await this.actorService.addManyActors( createActorArray );
    let newMovie = await this.prisma.movies.create({ data: createMovieInput });
    if( newActors.length > 0 ){
      await newActors.forEach( async a => {
        this.actorMovieService.createRelation( a, newMovie );
      });
    }
    return newMovie;
  }

  async findAll(): Promise<Movie[]> {

    let moviesPrisma: any = await this.prisma.movies.findMany({
      include: {
        actor_movie: {
          include: {
            actors: true
          }
        }
      }
    });

    // moviesPrisma.forEach( m => {
    //   console.log( m.title, m.actor_movie );
    // });

    let movies: Movie[] = new Array();

    moviesPrisma.forEach(element => {
      movies.push( new Movie(element) );
    });

    return movies;
  }

  async findOne(id: number): Promise<movies> {
    return await this.prisma.movies.findUnique({ where: { id: id } });
  }

  update(id: number, updateMovieInput: UpdateMovieInput) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
