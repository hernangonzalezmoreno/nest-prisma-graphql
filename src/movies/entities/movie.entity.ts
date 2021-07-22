import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Actor{

  @Field(() => Int)
  id: number;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

}

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

  @Field(type => [Actor])
  actors: Actor[];

}
