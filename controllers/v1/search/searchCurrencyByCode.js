const currencies =  require('./Common-Currency');

const searchCurrencyByCode = (req, res) => {
    const length = Object.keys(currencies).length;
    const query = req.query.code;
    const currencyKeys = Object.keys(currencies).filter(item => {
        if(((currencies[item].code).toUpperCase()).includes(query.toUpperCase())){
            return currencies[item]
        }
    });
    const filteredCurrencies = currencyKeys.map(item => {
        return currencies[item]
    });
    res.json({
        success: true,
        length: length,
        data: filteredCurrencies
    });
};

module.exports = searchCurrencyByCode;

