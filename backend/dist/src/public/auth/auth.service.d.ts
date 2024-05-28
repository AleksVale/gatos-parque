import { AuthenticateDTO } from './dto/authenticate.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/admin/user/user.service';
import { AuthenticateResponseDTO } from './dto/authenticate.response.dto';
import { CreateSupporterDTO } from './dto/create-account.dto';
export declare class AuthService {
    private jwt;
    private userService;
    constructor(jwt: JwtService, userService: UserService);
    authenticate(authenticateBody: AuthenticateDTO): Promise<AuthenticateResponseDTO>;
    createSupporter(createSupporterBody: CreateSupporterDTO): Promise<{
        success: boolean;
    }>;
}
