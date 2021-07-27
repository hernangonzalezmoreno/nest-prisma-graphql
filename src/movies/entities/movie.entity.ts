import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Actor } from 'src/actors/entities/actor.entity';

@ObjectType()
export class Movie {

  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Float)
  rating: number;

  @Field(() => Int)
  awards: number;

  @Field(() => Int)
  length: number;

  @Field( type => [Actor], {nullable: true} )
  actors?: Actor[];

  constructor( moviePrisma: any ){
    if( 'id' in moviePrisma ) this.id = moviePrisma.id;
    if( 'title' in moviePrisma ) this.title = moviePrisma.title;
    if( 'rating' in moviePrisma ) this.rating = moviePrisma.rating;
    if( 'awards' in moviePrisma ) this.awards = moviePrisma.awards;
    if( 'length' in moviePrisma ) this.length = moviePrisma.length;
    if( 'actor_movie' in moviePrisma ){
      this.actors = new Array();
      moviePrisma.actor_movie.forEach( m => {
        this.actors.push( m.actors );
      });
    }
  }

}
