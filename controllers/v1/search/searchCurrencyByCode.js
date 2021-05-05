const currencies =  require('./Common-Currency');
const getFlagUrl = require('../../../utils/getFlagUrl');

const searchCurrencyByCode = (req, res) => {
    const length = Object.keys(currencies).length;
    const query = req.query.code;
    if(!query){
        res.json({
            message: 'Please add the currency code',
            success : false
        })
        return
    }
    const currencyKeys = Object.keys(currencies).filter(item => {
        if(((currencies[item].code).toUpperCase()).includes(query.toUpperCase())){
            return currencies[item]
        }
    });
    const filteredCurrencies = currencyKeys.map(item => {
        return currencies[item]
    });
    const currenciesWithFlag = filteredCurrencies.map(item => {
        return {
            ...item,
            flag: getFlagUrl((item.code).toLowerCase())
        }
    });
    res.json({
        success: true,
        length: length,
        data: currenciesWithFlag
    });
};

module.exports = searchCurrencyByCode;

