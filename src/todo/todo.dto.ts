import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class Test {
  @IsNotEmpty({
    message: 'Beta to name da ga to aga jaya ga',
  })
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
export class CreateTodo {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
export class UpdateTodo {
  @IsNotEmpty()
  @IsNumber()
  id: number;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
