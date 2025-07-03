import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revivew } from './reviews.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Revivew])],
  controllers: [],
  providers: [],
})
export class ProductsModule {}
