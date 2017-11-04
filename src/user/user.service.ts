import { Component, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './user.model'
import { USER_REPOSITORY_TOKEN } from '../constants'

@Component()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN) private readonly userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }
}
