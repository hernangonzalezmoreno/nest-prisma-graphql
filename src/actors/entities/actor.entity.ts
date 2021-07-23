import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Actor {

  @Field(() => Int)
  id: number;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

}
