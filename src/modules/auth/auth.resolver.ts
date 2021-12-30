import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { InputLogin, LoginResult, LoginResponseAdmin, LoginResponseAdministrative } from 'src/graphql.schema';
import { JwtAuthGuard } from 'src/security/guards/jwt-auth.guard';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) { }

  @Mutation('login')
  async login(@Args('input') args: InputLogin): Promise<LoginResult> {
    try {
      const { user, type } = await this.authService.login(args);

      const token = this.jwtService.sign({ user });

      if (type === 'admin') {
        const responseAdmin: LoginResponseAdmin = {
          token,
          admin: user,
          type
        };

        return responseAdmin;
      } else {
        const responseAdministrative: LoginResponseAdministrative = {
          token,
          administrative: user,
          type
        }

        return responseAdministrative;
      }
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Mutation('refreshToken')
  async refreshToken(@Context('req') { user }): Promise<LoginResult> {
    const { user: userSession, type } = await this.authService.refreshToken(user);

    const token = this.jwtService.sign({ user });

    if (type === 'admin') {
      const responseAdmin: LoginResponseAdmin = {
        token,
        admin: userSession,
        type
      };

      return responseAdmin;
    } else {
      const responseAdministrative: LoginResponseAdministrative = {
        token,
        administrative: userSession,
        type
      }

      return responseAdministrative;
    }
  }
}
