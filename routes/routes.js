const express = require('express');
const router = express.Router();
const searchAllCurrencies = require('../controllers/v1/search/searchAllCurrency');
const searchCurrencyByName = require('../controllers/v1/search/searchCurrencyByName');
const searchCurrencyByCode = require('../controllers/v1/search/searchCurrencyByCode');
const searchCurrencyByValue = require('../controllers/v1/search/searchCurrencyByValue');

router.get('/', (req, res) => {
    // res.json({
    //     developer: 'Shrey Vijayvargiya',
    //     purpose: 'Search currency API',
    //     application: 'Using the API you can simply search the API',
    // })
    // res.redirect("https://ihatereading.in/projects/search-currency?type=introduction")
    res.render('index')
});

router.get('/api/v1/search-all-currencies', searchAllCurrencies);
router.get('/api/v1/search-currency-by-name', searchCurrencyByName);
router.get('/api/v1/search-currency-by-code', searchCurrencyByCode);
router.get('/api/v1/search-currency-by-value', searchCurrencyByValue);


module.exports = router;
