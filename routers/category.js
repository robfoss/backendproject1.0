const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category');

router.get('/', categoryController.home);
router.get('/annuities', categoryController.annuities);
router.get('/ira-401k', categoryController.ira);
router.get('/retirement', categoryController.retirement);
router.get('/investments', categoryController.investments);
router.get('/howmuchdoineedtoretire', categoryController.howMuchDoIneedToRetire);
router.get('/bestAgeForAnAnnuity', categoryController.bestAgeForAnAnnuity);
router.get('/fixedAnnuity', categoryController.whatIsAFixedAnnuity);
router.get('/variableAnnuity', categoryController.whatIsAVariableAnnuity);
router.get('/sixquestions', categoryController.sixquestions);
router.get('/fundingannuities', categoryController.fundingAnAnnuity);
router.get('/understandingfixedannuities', categoryController.understandfixedannuities);
router.get('/understandingvariableannuities', categoryController.understandvariableannuities);
router.get('/annuity', categoryController.theannuity)
router.get('/fivequestions', categoryController.fivequestions);
router.get('/ira401koptions', categoryController.iraoptions);
router.get('/whatyourprovider401k', categoryController.whatyourprovider);
router.get('/solo401k', categoryController.solo401k)
router.get('/irasafterretirement', categoryController.iraafterretirement);
router.get('/protectretirement', categoryController.protectretirement);
router.get('/crashtested', categoryController.crashtested);
router.get('/beachretirement', categoryController.beachretirement);
router.get('/retirementgotchas', categoryController.retirementgotchas);
router.get('/balancedportfolio', categoryController.balancedportfolio)

router.get('/formlanding', categoryController.formlander);
router.post('/formlanding', categoryController.processForm)

router.post('/send',categoryController.processForm);


module.exports = router;