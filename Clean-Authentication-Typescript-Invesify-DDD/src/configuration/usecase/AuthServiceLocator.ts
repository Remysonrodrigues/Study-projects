import SigninUseCase from '@pbb/application/usecase/SigninUseCase';
import { TYPES } from '@pbb/constants/Types';
import { injectable, inject } from 'inversify';
import IUserReadOnlyRepository from '@pbb/application/repositories/IUserReadOnlyRepository';

@injectable()
export default class AuthServiceLocator {
    
    constructor(@inject(TYPES.IUserReadOnlyRepository) 
                private readRepository: IUserReadOnlyRepository ) {

    }

    public GetSignInUseCase() {
        return new SigninUseCase(this.readRepository);
    }
};