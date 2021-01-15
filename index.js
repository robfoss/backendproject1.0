require('dotenv').config();   
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const PORT = 3006;
const HOST = '127.0.0.1';



const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');
const logger = morgan('dev');
const helmet = require('helmet');


app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.static('assets'));



const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    rolling: true,
    //maxAge: 1000 * 60 * 60 * 24 * 7,
    cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));
app.use(logger);

app.use(helmet());
app.use(express.urlencoded({extended: true}));


const { layout } = require('./utils')

const {
    categoryRouter,
    agentRouter

} = require('./routers');



app.use('/', categoryRouter);
app.use('/category', categoryRouter);
app.use('/agent', agentRouter)
app.use('/agenthome', agentRouter)
app.use('/logout', agentRouter)
app.use('/send', categoryRouter)

// app.use('/agentsigup', agentRouter)
// app.use('/agentlogin', agentRouter)










server.listen(PORT, HOST, () => {
    console.log(`Listening on port: ${PORT}`);
});