import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import paseto from 'paseto';
const {
  V4: { sign, verify },
} = paseto;
@Injectable()
export class AuthService {
  private users = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
      email: 'john@doe.com',
    },
    {
      id: 2,
      username: 'cena',
      password: 'cena_changeme',
      email: 'cena@doe.com',
    },
  ];

  login(loginDto: LoginDto) {
    //*Create your own logic here to validate user credentials
    const user = this.users.find(
      (user) =>
        user.email === loginDto.email && user.password === loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Email or password is incorrect');
    }
  }
}
