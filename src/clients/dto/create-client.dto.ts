import { IsEmail, IsOptional, IsString, max, MaxLength, MinLength } from "class-validator";

export class CreateClientDto {
    @IsString()
  @MinLength(3)
  @MaxLength(80)
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  @MinLength(9)
  phone?:string;

  @IsOptional()
  @IsString()
  @MaxLength(150)
  address?:string;
}
