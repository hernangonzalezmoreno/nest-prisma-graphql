import { Injectable } from '@nestjs/common';
import { actors, movies } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ActorMovieService {

    constructor( private prisma: PrismaService ){}

    async createRelation( actor: actors, movie: movies ){
        console.log("Creando relacion", actor.id, movie.id);
        return await this.prisma.actor_movie.create({
            data: {
                actor_id: actor.id,
                movie_id: movie.id
            }
        });
    }

}
