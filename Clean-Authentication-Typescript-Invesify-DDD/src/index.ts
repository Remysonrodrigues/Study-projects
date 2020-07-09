import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import AuthServiceLocator from './configuration/usecase/AuthServiceLocator';
import { TYPES } from './constants/Types';
import UserRepository from './infrastructure/UserRepository';
import IUserReadOnlyRepository from './application/repositories/IUserReadOnlyRepository';
import { InversifyExpressServer } from 'inversify-express-utils';

const container = new Container();

// set up bindings
container.bind<AuthServiceLocator>(TYPES.AuthServiceLocator).to(AuthServiceLocator);
container.bind<IUserReadOnlyRepository>(TYPES.IUserReadOnlyRepository).to(UserRepository);

const server = new InversifyExpressServer(container);
server.setConfig((application: express.Application) => {
    application.use(bodyParser.urlencoded({ extended: true }));
    application.use(bodyParser.json());
});

const app = server.build();

app.listen(5000, () => {
    console.log(`Server started at http://localhost:${5000}`);
});