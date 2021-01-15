require('dotenv').config(); 

const { layout } = require('../utils')
const express = require('express')
const bcrypt = require('bcryptjs');
const { Agent, Assignment, Note, Lead } = require('../models');
const session = require('express-session');
const FileStore = require('session-file-store')(session);


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

const agenthome = async (req, res) => {
    const { id } = req.session.agent;
 
    if(id) {
        const assignments = await Assignment.findAll({
            
            where: {
                agentId: id,
            },
        })
        const findLead = async (agentId, leadId)=>{
           const test = await Lead.findAll({
                where: {
                        id: leadId
                    }
            })
            
            return test
        }
        // const returnLead = async (agentId, leadId) =>{
        //     return await findLead(agentId, leadId)
        // }
        
        const getData = async()=>{
           return await Promise.all(assignments.map(async assignment =>  await findLead(assignment.agentId, assignment.leadId)))
        }
        let leads = await getData();
        leads = leads.flat()

        res.render('agenthome', {
        locals: {
        leads,
        title: 'Agent Page'
        },
        ...layout
        })
    } else {
        res.redirect('/login')
    }    
}


const processAgentSignup = async (req, res) => {
    const { firstName, lastName, zip, state, email, phone, password } = req.body;
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
            phone,
        
        });
        res.redirect(`${req.baseUrl}/agenthome`);

    } catch(err){
        console.log(err)
        if (err.name === "SequelizeUniqueConstraintError"){
            alert('Username Taken')
        }
        res.redirect('/signup')
    }

};

const processLogin = async (req, res) => {
    const { email, password } = req.body;
    // const { id } = req.session.user;
    const agent = await Agent.findOne({
        where: {
            email
        }
    });
    if(agent) {
        console.log('valid agent email')
        const isValid = bcrypt.compareSync(password, agent.hash);
        if(isValid) {
            console.log('password works')
            req.session.agent = {
                email,
                id: agent.id
            };
            req.session.save(()=> {
                res.redirect(`${req.baseUrl}/agenthome`)
            });
        } else {
            console.log('wrong password')
            res.redirect(`${req.baseUrl}/login`)
        }        
    } else {
        console.log('agent not valid')
        res.redirect(`${req.baseUrl}/login`);
    }
};

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    });
};

const del = async (req, res) => {
    const { id } = req.session.agent;
    const { leadId } = req.body
    console.log("************************",req.body)
    if(id){
        // const lead = await Lead.findAll({
        //     where: {
        //         agentId: id
        //     }
        // })
        const destroyLead = await Assignment.destroy({
            where: {
                agentId: id,
                leadId
            }
        });
        console.log('Assignment Destoryed')
        res.redirect('/agent/agenthome');
    }
}

module.exports = {
    agentlogin,
    agenthome,
    signup,
    processAgentSignup,
    processLogin,
    logout, 
    del  
}