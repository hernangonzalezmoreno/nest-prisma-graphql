import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

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

}
