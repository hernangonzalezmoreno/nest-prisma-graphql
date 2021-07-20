import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {

  @Field( type => Int, { description: 'Id del usuario' })
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password?: string;

}
