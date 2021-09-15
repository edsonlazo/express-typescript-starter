import {Router} from 'express';

const v1Router = Router();

v1Router.get('/', (req, res) => {
  return res.json({message: 'This API is up and running 🎉'});
});

export {v1Router};
