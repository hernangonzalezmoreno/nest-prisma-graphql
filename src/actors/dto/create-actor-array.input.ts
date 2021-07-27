import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateActorInput } from './create-actor.input';

@InputType()
export class CreateActorArray {

  @Field( type => [CreateActorInput], {nullable: true})
  actors?: CreateActorInput[];  

}
