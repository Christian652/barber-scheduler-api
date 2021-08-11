import { Injectable, } from '@nestjs/common';
import { Role } from 'src/auth/enums/role.enum';

@Injectable()
export class RolesService {
  public async getAll(): Promise<Role[]> {
    const roles = [
      Role.Admin,
    ];

    return roles;
  }
}