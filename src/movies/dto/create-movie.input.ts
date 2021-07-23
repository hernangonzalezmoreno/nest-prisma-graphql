import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field()
  title: string;

  @Field(() => Float, {nullable: true})
  rating?: number;

  @Field(() => Int, {nullable: true})
  awards?: number;

  @Field(() => Int, {nullable: true})
  length?: number;

}
