import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateActorInput, CreateActors, CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { movies } from '@prisma/client';
import { ActorsService } from 'src/actors/actors.service';

@Injectable()
export class MoviesService {

  constructor(
    private actorsService: ActorsService,
    private prisma: PrismaService
  ){}

  async create(createMovieInput: CreateMovieInput, createActors: CreateActors): Promise<movies> {

    for( let i =0; i < createActors.actors.length; i++ ){
      console.log( createActors.actors[i] );
    }

    return await this.prisma.movies.create( {data: createMovieInput} );

  }

  async findAll(): Promise<movies[]> {

    let movies: movies[] = await this.prisma.movies.findMany({
      include: {
        actors: true
      }
    });

    return movies;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieInput: UpdateMovieInput) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
