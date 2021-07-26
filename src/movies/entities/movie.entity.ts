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

}
