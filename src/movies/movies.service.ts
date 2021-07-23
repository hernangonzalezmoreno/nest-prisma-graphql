import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { movies } from '@prisma/client';
import { CreateActorArray } from 'src/actors/dto/create-actor-array.input';
import { ActorsService } from 'src/actors/actors.service';

@Injectable()
export class MoviesService {

  constructor(
    private actorService: ActorsService,
    private prisma: PrismaService
  ){}

  async create(createMovieInput: CreateMovieInput, createActorArray: CreateActorArray): Promise<movies> {
    await this.actorService.addManyActors( createActorArray );
    return await this.prisma.movies.create({ data: createMovieInput });
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
