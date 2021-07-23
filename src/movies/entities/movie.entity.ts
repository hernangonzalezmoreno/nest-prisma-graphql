import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Movie {

  @Field(() => Int, {nullable: true})
  id?: number;

  @Field()
  title: string;

  @Field(() => Float, {nullable: true})
  rating?: number;

  @Field(() => Int, {nullable: true})
  awards?: number;

  @Field(() => Int, {nullable: true})
  length?: number;

  // @Field(type => [Actor], {nullable: true})
  // actors?: Actor[];

}
