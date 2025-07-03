import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  public async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  public async getProductById(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  public async createProduct(productDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(productDto);
    await this.productRepository.save(newProduct);
    return newProduct;
  }

  public async updateProduct(
    id: number,
    ProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.getProductById(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    const newProduct = await this.productRepository.update(id, ProductDto);
    if (newProduct.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return this.getProductById(id);
  }

  public async deleteProduct(id: number): Promise<{ message: string }> {
    const product = await this.getProductById(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return { message: `Product with id ${id} deleted successfully` };
  }
}
