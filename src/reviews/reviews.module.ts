import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revivew } from './reviews.entity';
import { ProductsController } from 'src/products/products.controller';
import { ProductsService } from 'src/products/products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Revivew])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
