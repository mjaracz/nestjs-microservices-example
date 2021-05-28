import { IsString } from 'class-validator';

export class CreateMailDto {
  @IsString()
  readonly mail: string;

  @IsString()
  readonly username: string;
}
