import { Injectable } from '@nestjs/common';
import { Upload } from './entities/files.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Upload) private uploadRepository: Repository<Upload>,
  ) {}

  findAll() {
    return `This action returns all upload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} upload`;
  }

  remove(id: number) {
    return `This action removes a #${id} upload`;
  }

  async updatePicture(obj: { filepath: string; filename: string }) {
    await this.uploadRepository.save([obj]);
  }
}
