import { Resolver, ResolveField } from '@nestjs/graphql';

@Resolver('LoginResult')
export class LoginUnionResolver {
    @ResolveField()
    __resolveType(value) {
        if (value.type == 'admin') {
            return 'LoginResponseAdmin';
        }
        if (value.type == 'administrative') {
            return 'LoginResponseAdministrative';
        }
        return null;
    }
}