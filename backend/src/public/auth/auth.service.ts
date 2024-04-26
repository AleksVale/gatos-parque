import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthenticateDTO } from './dto/authenticate.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  async authenticate(authenticateBody: AuthenticateDTO) {
    const token = this.jwt.sign({
      id: 3,
      sub: {
        name: `Aleks`,
        email: 'alex',
        profile: 'aleks',
      },
    });
    return {
      token,
    };
  }
}
