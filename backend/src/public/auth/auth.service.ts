import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthenticateDTO } from './dto/authenticate.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/admin/user/user.service';
import { AuthenticateResponseDTO } from './dto/authenticate.response.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private userService: UserService,
  ) {}

  async authenticate(
    authenticateBody: AuthenticateDTO,
  ): Promise<AuthenticateResponseDTO> {
    const user = await this.userService.findByEmail(authenticateBody.email);

    const isValidPassword = await bcrypt.compare(
      authenticateBody.password,
      user?.password ?? '',
    );
    if (!user || !isValidPassword) {
      throw new BadRequestException('Credenciais inválidas');
    }
    const token = this.jwt.sign({
      id: user.id,
      sub: {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        profile: user.role.name,
      },
    });
    return {
      token,
      role: user.role.name,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }
}
