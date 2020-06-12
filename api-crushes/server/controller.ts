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
        return model.find(id);
    }

    selectOne(req, res){
        const id = req.params.id; 

        this.getCrushesByID(id)
            .then(crush => res.status(200).json({ 'result': crush }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    deleteByID(id){
        return model.deleteOne(id);
    }

    delete(req, res){
        const id = req.params.id; 

        this.deleteByID(id)
            .then(crush => res.status(200).json({ 'result': crush }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    updateCrushs(id, data){
        return model.findByIdAndUpdate(id, data);
    }

    update(req, res){
        const id = req.params.id; 
        const data = req.body;

        this.updateCrushs(id, data)
            .then(crush => res.status(200).json({ 'result': crush }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    createCrushes(data){
        return model.create(data);
    }

    insert(req, res){
        const cruhs = req.body;

        this.createCrushes(cruhs)
            .then(crush => res.status(200).json({ 'result': crush }))
            .catch(err => res.status(400).json({ 'result': err }));
    }
}

export default Controller;