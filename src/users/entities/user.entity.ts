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

  constructor( id: number, name: string, email: string ){
    this.id = id;
    this.name = name;
    this.email = email;
  }

}
