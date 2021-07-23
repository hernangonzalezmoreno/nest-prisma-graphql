import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateActorInput{

  @Field()
  first_name: string;

  @Field({nullable: true})
  last_name?: string;

}

@InputType()
export class CreateActors{
  @Field(type => [CreateActorInput], {nullable: true})
  actors?: CreateActorInput[];
}

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

  // @Field(type => [CreateActorInput], {nullable: true})
  // actors?: CreateActorInput[];
}
