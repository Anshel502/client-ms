import { HttpStatus, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';


@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createClientDto: CreateClientDto) {
    return this.prisma.clients.create({
      data: createClientDto,
    });
  }

  findAll() {
    return this.prisma.clients.findMany();
  }

  async findOne(id: string) {
    const client = await this.prisma.clients.findUnique({
      where: { id },
    });

    if (!client) {
      throw new RpcException({
        message: `User with id ${id} not found`,
        status: HttpStatus.NOT_FOUND,
      });
    }

    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const { id: _, ...data } = updateClientDto;
    await this.findOne(id);

    return this.prisma.clients.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.clients.delete({
      where: { id },
    });
  }
}

