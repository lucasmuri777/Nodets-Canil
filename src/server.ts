import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();//configurou o dotenv para ser usado na aplicação

const server = express();

server.set('view engine', 'mustache');//configurou o mustache para ser usado na aplicação
server.set('views', path.join(__dirname, 'views'));//configurou o path para ser usado na aplicação
server.engine('mustache', mustache());//configurou o mustache para ser usado

server.use(express.static(path.join(__dirname, '../public')));//configurou uma pasta de arquivos estaticos para ser usado


//Rotas
server.use(mainRoutes);

server.use((req, res)=>{
    res.render('pages/404')
})//Se não for nenhuma das rotas


//Inicia servidos
server.listen(process.env.PORT);