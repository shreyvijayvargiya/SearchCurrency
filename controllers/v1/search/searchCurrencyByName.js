const currencies =  require('./Common-Currency');
const getFlagUrl = require('../../../utils/getFlagUrl');

const searchCurrencyByName = (req, res) => {
    const query = req.query.name;
    if(!query){
        res.json({
            message: 'Please add the currency name',
            success : false
        })
        return
    }
    const currencyKeys = Object.keys(currencies).filter(item => {
        if(((currencies[item].name).toUpperCase()).includes(query.toUpperCase())){
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
        length: currenciesWithFlag.length,
        data: currenciesWithFlag
    });
};

module.exports = searchCurrencyByName;

