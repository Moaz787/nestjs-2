import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revivew } from './reviews.entity';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';

@Module({
  imports: [TypeOrmModule.forFeature([Revivew])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsMdoule {}
