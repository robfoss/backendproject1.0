const { layout } = require('../utils')
const bcrypt = require('bcryptjs');
const { Agent, Assignment, Note, Lead } = require('../models');


const agentlogin = (req, res) =>{
    res.render('login', {
        locals: {
            title: 'Agent Login'
        },
        ...layout
    })
}

const signup = (req, res) => {
    res.render('signup', {
        locals: {
            title: 'Sign Up'
        },
        ...layout
    })
}

const processAgentSignup = async (req, res) => {
    const {firstName, lastName, zip, state, email, phone, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    try {
        const newAgent = await Agent.create({
            firstname: firstName,
            lastname: lastName,
            email,
            zip,
            hash,
            state,
            phone
        });
        console.log(newAgent)
        res.redirect('/login')

    } catch(err){
        console.log(err)
        if (err.name === "SequelizeUniqueConstraintError"){
            alert('Username Taken')
        }
        res.redirect('/signup')
    }

}

const processLogin = async (req, res) => {
    const { email, password } = req.body;
    const agent = await Agent.findOne({
        where: {
            email,
            password
        }
    });
    if(agent) {
        const isValid = bcrypt.compareSync(password, agent.hash);
        if(isValid) {
            req.session.agent = {
                email,
                id: agent.id
            };
            req.session.save(()=>{
                res.redirect('/list')
            });
        } else {
            console.log('wrong password')
        }        
    } else {
        res.redirect('/login');
    }
};

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    });
};

module.exports = {
    agentlogin,
    signup,
    processAgentSignup,
    processLogin,
    logout
}