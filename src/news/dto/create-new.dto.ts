import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateNewDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}