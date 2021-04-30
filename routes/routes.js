const express = require('express');
const router = express.Router();
const searchAllCurrencies = require('../controllers/v1/search/searchAllCurrency');
const searchCurrencyByName = require('../controllers/v1/search/searchCurrencyByName');
const searchCurrencyByCode = require('../controllers/v1/search/searchCurrencyByCode');
const searchCurrencyByValue = require('../controllers/v1/search/searchCurrencyByValue');

router.get('/', (req, res) => {
    res.send('Welcome to basic express setup repository')
});

router.get('/api/v1/search-all-currencies', searchAllCurrencies);
router.get('/api/v1/search-currency-by-name', searchCurrencyByName);
router.get('/api/v1/search-currency-by-code', searchCurrencyByCode);
router.get('/api/v1/search-currency-by-value', searchCurrencyByValue);


module.exports = router;
