import { AuthenticateDTO } from './dto/authenticate.dto';
import { AuthService } from './auth.service';
import { AuthenticateResponseDTO } from './dto/authenticate.response.dto';
import { CreateSupporterDTO } from './dto/create-account.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    authenticate(body: AuthenticateDTO): Promise<AuthenticateResponseDTO>;
    createSupporter(body: CreateSupporterDTO): Promise<{
        success: boolean;
    }>;
}
