import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name?: string;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  category?: string;
}
