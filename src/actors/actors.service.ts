import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';
import { actors, Prisma } from '@prisma/client';


@Injectable()
export class ActorsService {
  
  constructor( private prisma: PrismaService ){}
  
  async create(createActorInput: CreateActorInput): Promise<actors> {
    return await this.prisma.actors.create({ data: createActorInput });
  }

  findAll() {
    return `This action returns all actors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actor`;
  }

  async findByFirstAndLastName( createActorInput: CreateActorInput ): Promise<actors>{
    console.log( createActorInput );
    return await this.prisma.actors.findFirst({
      where: {
        first_name: createActorInput.first_name,
        last_name: createActorInput.last_name
      }
    });
  }

  update(id: number, updateActorInput: UpdateActorInput) {
    return `This action updates a #${id} actor`;
  }

  remove(id: number) {
    return `This action removes a #${id} actor`;
  }
}
