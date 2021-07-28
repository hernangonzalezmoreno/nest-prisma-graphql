import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma.service';
import { users } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService){}

  async create(createUserInput: CreateUserInput): Promise<users> {
    return await this.prisma.users.create( {data: createUserInput} );
  }

  async findAll(): Promise<User[]> {

    // Usando user.entity
    let users: User[] = await this.prisma.users.findMany();
    
    // Usando users de Prisma
    // let users: users[] = await this.prisma.users.findMany();
    
    return users;
  }

  async findOne(id: number): Promise<users> {
    return await this.prisma.users.findUnique({where: { id: id } });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
