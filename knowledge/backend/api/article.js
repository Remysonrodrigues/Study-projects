module.exports = app => {
    const { existsOrError } = app.api.validation;

    const save = async (req, res) => {
        const article = { ...req.body };
        if(req.params.id) article.id = req.params.id;

        try {
            existsOrError(articles.name, 'Noma não informado');
            existsOrError(articles.description, 'Descrição não informada');
            existsOrError(articles.categoryId, 'Categoria não informada');
            existsOrError(articles.userId, 'Autor não informado');
            existsOrError(articles.content, 'Conteúdo não informado');
        } catch (msg) {
            res.status(400).send(msg);
        }

        if(article.id) {
            await app.db('articles')
                        .update(article)
                        .where({ id: article.id })
                        .then(_ => res.status(204).send())
                        .catch(err => res.status(500).send(err));
        } else {
            await app.db('articles')
                        .insert(article)
                        .then(_ => res.status(204).send())
                        .catch(err => res.status(500).send(err));
        }
    };

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('articles')
                                         .where({ id: req.params.id })
                                         .del();
            existsOrError(rowsDeleted, 'Artigo não foi encontrado.');
            
            remove.status(204).send();
        } catch (msg) {
            res.status(400).send(msg);
        }
    };

    const limit = 10;

    const get = async (req, res) => {
        const page = req.query.page || 1;

        const result = await app.db('articles')
                                .count('id')
                                .first();
        const count = parseInt(result.count);

        await app.db('articles')
                 .select('id', 'name', 'description')
                 .limit(limit)
                 .offset(page * limit - limit)
                 .then(articles => res.json({ data: articles, count, limit }))
                 .catch(err => res.status(500).send(err));
    };

    const getById = async (req, res) => {
        await app.db('articles')
                 .where({ id: req.params.id })
                 .first()
                 .then(article => { 
                    article.content = article.content.toString();
                    return res.json(article); 
                 })
                 .catch(err => res.status(500).send(err));
    };

    return { save, remove, get, getById };
};