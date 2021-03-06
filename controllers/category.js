const { layout, leadMail } = require('../utils');
const nodemailer = require("nodemailer");
const { Assignment, Agent, Note, Lead } = require('../models');
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();  


const home = (req, res) => {
    res.render('index');
};

const annuities = (req, res) => {
    res.render('annuities', {
        locals: {
            title: 'Annuities'
        },
        ...layout
    })
}

const ira = (req, res) =>{
    res.render('ira-401k', {
        locals: {
            title: 'IRA | 401(K)'
        },
        ...layout
    })
}

const retirement = (req, res) => {
    res.render('retirement', {
        locals: {
            title: 'Retirement'
        },
        ...layout
    })
}

const investments = (req, res) => {
    res.render('investments', {
        locals: {
            title: 'Investments'
        },
        ...layout
    })
}

const howMuchDoIneedToRetire = (req, res) => {
    res.render('howmuchdoineedtoretire', {
        locals: {
            title: 'How Much Do I Need to Retire?'
        },
        ...layout
    })
}

const bestAgeForAnAnnuity = (req, res) => {
    res.render('bestAgeForAnAnnuity', {
        locals: {
            title: 'Best Age For an Annuity'
        },
        ...layout
        
    })
}

const whatIsAFixedAnnuity = (req, res) => {
    res.render('fixedAnnuity', {
        locals: {
            title: 'What Is A Fixed Annuity?'
        },
        ...layout,
        
    })
}

const whatIsAVariableAnnuity = (req, res) => {
    res.render('fixedAnnuity', {
        locals: {
            title: 'What Is A Variable Annuity?'
        },
        ...layout
    })
}

const sixquestions = (req, res) => {
    res.render('sixquestions', {
        locals: {
            title: '6 Questions to Ask Before Buying an Annuity'
        },
        ...layout
    })
}

const fundingAnAnnuity = (req, res) => {
    res.render('fundingannuities', {
        locals: {
            title: 'Need to Fund and Annuity?'
        },
        ...layout
    })
}

const understandfixedannuities = (req, res) => {
    res.render('understandingfixedannuities', {
        locals: {
            title: 'Understanding Fixed Annuities'
        },
        ...layout
    })
}

const understandvariableannuities = (req, res) => {
    res.render('understandingvariableannuities', {
        locals: {
            title: 'Understanding Variable Annuities'
        },
        ...layout
    })
}


const theannuity = (req, res) => {
    res.render('annuity', {
        locals: {
            title: "Annuities: Insurance for Retirement"
        },
        ...layout
    })
}

const fivequestions = (req, res) =>{
    res.render('fivequestions', {
        locals: {
            title: "The Savvy Annuity Buyer | 5 Questions to Protect and Earn"
        },
        ...layout
    })
}
const iraoptions = (req, res) =>{
    res.render('ira401koptions', {
        locals: {
            title: "401(k) Options Before Retirement"
        },
        ...layout
    })
}

const whatyourprovider = (req, res) =>{
    res.render('whatyourprovider401k', {
        locals: {
            title: "What Your 401(k) Provider Doesn’t Want You to Know"
        },
        ...layout
    })
}

const solo401k = (req, res) =>{
    res.render('solo401k', {
        locals: {
            title: "The Solo 401(k)"
        },
        ...layout
    })
}

const iraafterretirement = (req, res) =>{
    res.render('irasafterretirement', {
        locals: {
            title: "How an IRA Works After Retirement"
        },
        ...layout
    })
}

const protectretirement = (req, res) =>{
    res.render('protectretirement', {
        locals: {
            title: "Protect Your Retirement"
        },
        ...layout
    })
}
const crashtested = (req, res) =>{
    res.render('crashtested', {
        locals: {
            title: "Have You Crash-Tested Your Retirement Plan?"
        },
        ...layout
    })
}

const beachretirement = (req, res) =>{
    res.render('beachretirement', {
        locals: {
            title: "The 5 Best Places To Retire on The Beach in 2020"
        },
        ...layout
    })
}

const retirementgotchas = (req, res) =>{
    res.render('retirementgotchas', {
        locals: {
            title: "Watch Out for These Retirement Gotchas"
        },
        ...layout
    })
}

const balancedportfolio = (req, res) =>{
    res.render('balancedportfolio', {
        locals: {
            title: "BUILDING A BALANCED PORTFOLIO"
        },
        ...layout
    })
}


function getState(zip) {

    /* Ensure param is a string to prevent unpredictable parsing results */
    if (typeof zip !== 'string') {
        console.log('Must pass the zipcode as a string.');
        return;
    }
  
    /* Ensure we have exactly 5 characters to parse */
    if (zip.length !== 5) {
        console.log('Must pass a 5-digit zipcode.');
        return;
    }
  
    /* Ensure we don't parse strings starting with 0 as octal values */
    const zipcode = parseInt(zip, 10);
  
    let st;
    let state;
  
    /* Code cases alphabetized by state */
    if (zipcode >= 35000 && zipcode <= 36999) {
        st = 'AL';
        state = 'Alabama';
    } else if (zipcode >= 99500 && zipcode <= 99999) {
        st = 'AK';
        state = 'Alaska';
    } else if (zipcode >= 85000 && zipcode <= 86999) {
        st = 'AZ';
        state = 'Arizona';
    } else if (zipcode >= 71600 && zipcode <= 72999) {
        st = 'AR';
        state = 'Arkansas';
    } else if (zipcode >= 90000 && zipcode <= 96699) {
        st = 'CA';
        state = 'California';
    } else if (zipcode >= 80000 && zipcode <= 81999) {
        st = 'CO';
        state = 'Colorado';
    } else if ((zipcode >= 6000 && zipcode <= 6389) || (zipcode >= 6391 && zipcode <= 6999)) {
        st = 'CT';
        state = 'Connecticut';
    } else if (zipcode >= 19700 && zipcode <= 19999) {
        st = 'DE';
        state = 'Delaware';
    } else if (zipcode >= 32000 && zipcode <= 34999) {
        st = 'FL';
        state = 'Florida';
    } else if ( (zipcode >= 30000 && zipcode <= 31999) || (zipcode >= 39800 && zipcode <= 39999) ) {
        st = 'GA';
        state = 'Georgia';
    } else if (zipcode >= 96700 && zipcode <= 96999) {
        st = 'HI';
        state = 'Hawaii';
    } else if (zipcode >= 83200 && zipcode <= 83999) {
        st = 'ID';
        state = 'Idaho';
    } else if (zipcode >= 60000 && zipcode <= 62999) {
        st = 'IL';
        state = 'Illinois';
    } else if (zipcode >= 46000 && zipcode <= 47999) {
        st = 'IN';
        state = 'Indiana';
    } else if (zipcode >= 50000 && zipcode <= 52999) {
        st = 'IA';
        state = 'Iowa';
    } else if (zipcode >= 66000 && zipcode <= 67999) {
        st = 'KS';
        state = 'Kansas';
    } else if (zipcode >= 40000 && zipcode <= 42999) {
        st = 'KY';
        state = 'Kentucky';
    } else if (zipcode >= 70000 && zipcode <= 71599) {
        st = 'LA';
        state = 'Louisiana';
    } else if (zipcode >= 3900 && zipcode <= 4999) {
        st = 'ME';
        state = 'Maine';
    } else if (zipcode >= 20600 && zipcode <= 21999) {
        st = 'MD';
        state = 'Maryland';
    } else if ( (zipcode >= 1000 && zipcode <= 2799) || (zipcode == 5501) ) {
        st = 'MA';
        state = 'Massachusetts';
    } else if (zipcode >= 48000 && zipcode <= 49999) {
        st = 'MI';
        state = 'Michigan';
    } else if (zipcode >= 55000 && zipcode <= 56899) {
        st = 'MN';
        state = 'Minnesota';
    } else if (zipcode >= 38600 && zipcode <= 39999) {
        st = 'MS';
        state = 'Mississippi';
    } else if (zipcode >= 63000 && zipcode <= 65999) {
        st = 'MO';
        state = 'Missouri';
    } else if (zipcode >= 59000 && zipcode <= 59999) {
        st = 'MT';
        state = 'Montana';
    } else if (zipcode >= 27000 && zipcode <= 28999) {
        st = 'NC';
        state = 'North Carolina';
    } else if (zipcode >= 58000 && zipcode <= 58999) {
        st = 'ND';
        state = 'North Dakota';
    } else if (zipcode >= 68000 && zipcode <= 69999) {
        st = 'NE';
        state = 'Nebraska';
    } else if (zipcode >= 88900 && zipcode <= 89999) {
        st = 'NV';
        state = 'Nevada';
    } else if (zipcode >= 3000 && zipcode <= 3899) {
        st = 'NH';
        state = 'New Hampshire';
    } else if (zipcode >= 7000 && zipcode <= 8999) {
        st = 'NJ';
        state = 'New Jersey';
    } else if (zipcode >= 87000 && zipcode <= 88499) {
        st = 'NM';
        state = 'New Mexico';
    } else if ( (zipcode >= 10000 && zipcode <= 14999) || (zipcode == 6390) ) {
        st = 'NY';
        state = 'New York';
    } else if (zipcode >= 43000 && zipcode <= 45999) {
        st = 'OH';
        state = 'Ohio';
    } else if ((zipcode >= 73000 && zipcode <= 73199) || (zipcode >= 73400 && zipcode <= 74999) ) {
        st = 'OK';
        state = 'Oklahoma';
    } else if (zipcode >= 97000 && zipcode <= 97999) {
        st = 'OR';
        state = 'Oregon';
    } else if (zipcode >= 15000 && zipcode <= 19699) {
        st = 'PA';
        state = 'Pennsylvania';
    } else if (zipcode >= 300 && zipcode <= 999) {
        st = 'PR';
        state = 'Puerto Rico';
    } else if (zipcode >= 2800 && zipcode <= 2999) {
        st = 'RI';
        state = 'Rhode Island';
    } else if (zipcode >= 29000 && zipcode <= 29999) {
        st = 'SC';
        state = 'South Carolina';
    } else if (zipcode >= 57000 && zipcode <= 57999) {
        st = 'SD';
        state = 'South Dakota';
    } else if (zipcode >= 37000 && zipcode <= 38599) {
        st = 'TN';
        state = 'Tennessee';
    } else if ( (zipcode >= 75000 && zipcode <= 79999) || (zipcode >= 73301 && zipcode <= 73399) ||  (zipcode >= 88500 && zipcode <= 88599) ) {
        st = 'TX';
        state = 'Texas';
    } else if (zipcode >= 84000 && zipcode <= 84999) {
        st = 'UT';
        state = 'Utah';
    } else if (zipcode >= 5000 && zipcode <= 5999) {
        st = 'VT';
        state = 'Vermont';
    } else if ( (zipcode >= 20100 && zipcode <= 20199) || (zipcode >= 22000 && zipcode <= 24699) || (zipcode == 20598) ) {
        st = 'VA';
        state = 'Virgina';
    } else if ( (zipcode >= 20000 && zipcode <= 20099) || (zipcode >= 20200 && zipcode <= 20599) || (zipcode >= 56900 && zipcode <= 56999) ) {
        st = 'DC';
        state = 'Washington DC';
    } else if (zipcode >= 98000 && zipcode <= 99499) {
        st = 'WA';
        state = 'Washington';
    } else if (zipcode >= 24700 && zipcode <= 26999) {
        st = 'WV';
        state = 'West Virginia';
    } else if (zipcode >= 53000 && zipcode <= 54999) {
        st = 'WI';
        state = 'Wisconsin';
    } else if (zipcode >= 82000 && zipcode <= 83199) {
        st = 'WY';
        state = 'Wyoming';
    } else {
        st = 'none';
        state = 'none';
        console.log('No state found matching', zipcode);
    }
  
    return state;
  }

   

const processForm = async (req, res) => {
    res.redirect('/')
    
    const { concern, savings, age, zip, firstName, lastName, email, phone } = req.body;
    const { id } = req.params
    const data = {
        concern,
        savings,
        age,
        zip
    }   
    //LEAD CREATION
    const newLead = await Lead.create({
        concern,
        savings,
        age,
        zip,
        firstname: firstName,
        lastname: lastName,
        email,
        phone,
        id     
    })

    // console.log(newLead.id);
    const leadState = getState(newLead.zip);
    console.log(leadState)
    
    //FIND THE AGENT FOR STATE
    const findAgentsForState = async (leadState) =>{
        const agents = await Agent.findAll({
            where: {
                state: leadState,
            }
    
        })
        console.log(agents)
        return agents;
    }

    
    const assignmentCreation = async (req, res) =>{
        const agents = await findAgentsForState(leadState)
        console.log(agents)
        const agentIds = await agents.map((agent) => agent.dataValues.id)
        
        const agentEmails = await agents.map((agent) => agent.dataValues.email)
    
        for(let i = 0; i < agents.length; i++){
            await Assignment.create({
                leadId: newLead.id,
                agentId: agentIds[i]
            });
            // const emailList = agentEmails.join();
            console.log(agentEmails);
            sendEmails(agentEmails);
        }
    }
    
        //SEND EMAIL(agents)
    const sendEmails = async (emailList)=>{
        

        let transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            // host: "",
            port: 465,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.EMAIL, 
              pass: process.env.PASSWORD,
            },
          });
        
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: emailList, // list of receivers
            subject: "New Lead", // Subject line
            text: "Hello world?", // plain text body
            html: JSON.stringify(data), // html body
          });
        
          console.log("Message sent: %s", info.messageId);
         
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    assignmentCreation(); 
    
}

const formlander = (req, res) =>{
    res.render('formlanding', {
        locals: {
           title: 'Speak With a Licensed Professional'
        },
        ...layout
    })
}

module.exports = {
    home,
    annuities,
    ira,
    retirement,
    investments,
    howMuchDoIneedToRetire,
    bestAgeForAnAnnuity,
    whatIsAFixedAnnuity,
    whatIsAVariableAnnuity,
    sixquestions,
    fundingAnAnnuity,
    understandfixedannuities,
    theannuity,
    understandvariableannuities,
    fivequestions,
    iraoptions,
    whatyourprovider,
    solo401k,
    iraafterretirement,
    protectretirement,
    crashtested,
    beachretirement,
    retirementgotchas,
    balancedportfolio,
    processForm,
    formlander
}