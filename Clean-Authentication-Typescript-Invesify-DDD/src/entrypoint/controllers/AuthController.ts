import { controller, httpPost, interfaces, request, response } from 'inversify-express-utils';
import ISigninUseCase from '../../application/usecase/ISigninUseCase';
import { TYPES } from '@pbb/constants/Types';
import { inject } from 'inversify';
import * as express from 'express';
import AuthServiceLocator from '@pbb/configuration/usecase/AuthServiceLocator';
import IUserDto from '@pbb/application/usecase/IUserDto';

@controller("/auth")
export default class AuthController implements interfaces.Controller {
    private readonly signInUserCase: ISigninUseCase; 

    constructor(@inject(TYPES.AuthServiceLocator) serviceLocator: AuthServiceLocator) {
        this.signInUserCase = serviceLocator.GetSignInUseCase();
    }

    @httpPost('/signin')
    public sigin(@request() req: express.Request, @response() res: express.Response ) {
        const userDto: IUserDto = req.body;
        return this.signInUserCase.signin(userDto)
                   .then((foundUserDto: IUserDto) => res.status(200).json(foundUserDto))
                   .catch((err: Error) => res.status(400).json({error: err.message}));
    }
};
