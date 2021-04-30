const currencies =  require('./Common-Currency');

const searchCurrencyByName = (req, res) => {
    const length = Object.keys(currencies).length;
    const query = req.query.name;
    const currencyKeys = Object.keys(currencies).filter(item => {
        if(((currencies[item].name).toUpperCase()).includes(query.toUpperCase())){
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

module.exports = searchCurrencyByName;

