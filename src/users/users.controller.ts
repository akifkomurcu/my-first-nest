import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAll(): object {
    return this.userService.findAll();
  }

  @Get(':id')
  //url'deki id yi al yanındaki değişkene at  -- take id from url and put it in a variable.
  // /users/2
  getOne(@Param('id') id: number) {
    console.log('geldi id', id);
    
    // return `Id collected: ${id} and name: ${this.userService.getOne(id)}`
    return this.userService.getOne(id);
  }
//  Logs: Id collected: 2


//   {
//     "name": "akif",
//     "age": 24
//   } 
// body'deki dto'ya uygun bilgileri al -- Get information appropriate to dto in body


  @Post()
  create(@Body() x: CreatePersonDto){
    return `User created: User name is ${x.name} and age is ${x.age}`
  }
}
// Logs: User created: User name is akif and age is 24

