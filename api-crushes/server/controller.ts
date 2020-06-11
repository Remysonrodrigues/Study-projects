import model from './model';
import { error } from 'console';
import { json } from 'express';

class Controller{
    
    constructor(){}

    getCrushes(){
        return model.find({});
    }

    select(req, res){
        this.getCrushes()
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    getCrushesByID(id){
        return model.findOne(id);
    }

    selectOne(req, res){
        const id = req.params.id; 

        this.getCrushesByID(id)
            .then(crush => res.status(200).json({ 'result': crush }))
            .catch(err => res.status(400).json({ 'result': err }));
    }
}

export default Controller;