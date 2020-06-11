import * as express from 'express';

import database from './db';

class App{
    public app: express.Application;
    private database: database;

    constructor(){
        this.app = express();
        this.database = new database();
        this.database.createConnection();
        
        this.routes();
    }

    routes(){
        this.app.route('/').get((req, res) => res.status(200).json({ "result": "Hello World!" }));
    }
}

export default new App();