import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateActorInput {
  
  @Field()
  first_name: string;

  @Field()
  last_name: string;

}
