import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';
import { actors, Prisma } from '@prisma/client';
import { CreateActorArray } from './dto/create-actor-array.input';


@Injectable()
export class ActorsService {
  
  constructor( private prisma: PrismaService ){}
  
  async create(createActorInput: CreateActorInput): Promise<actors> {
    return await this.prisma.actors.create({ data: createActorInput });
  }

  async addManyActors( createActorArray: CreateActorArray ): Promise<actors[]>{

    // let newActors: actors[];
    let newActors: actors[] = new Array();

    createActorArray.actors.forEach(async (a) => {

      let exist = await this.findByFirstAndLastName(a);
      if (!exist) {
        newActors.push(await this.create(a));
        console.log('Se agrego nuevo actor:', a.first_name, a.last_name);
      } else {
        newActors.push(exist);
        console.log('El actor', a.first_name, a.last_name, 'ya existia.');
      }

    });

    return newActors;
  }

  findAll() {
    return `This action returns all actors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} actor`;
  }

  async findByFirstAndLastName( createActorInput: CreateActorInput ): Promise<actors>{
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
