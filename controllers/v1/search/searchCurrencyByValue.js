const currencies =  require('./Common-Currency');

const searchCurrencyByValue = (req, res) => {
    const length = Object.keys(currencies).length;
    const query = req.query.value;
    if(!query){
        res.json({
            message: 'Please provide the search value',
            success : false
        })
        return
    }
    const currencyKeys = Object.keys(currencies).filter(item => {
        const codeToUpperCase = (currencies[item].code).toUpperCase();
        const nameToUpperCase = (currencies[item].name).toUpperCase();
        const name_pluralToUpperCase = (currencies[item].name_plural).toUpperCase();
        const queryToUpperCase = query.toUpperCase();
        if(codeToUpperCase.includes(queryToUpperCase) || nameToUpperCase.includes(queryToUpperCase) || name_pluralToUpperCase.includes(queryToUpperCase)){
            return item
        };
    });
    const filteredCurrencies = currencyKeys.map(item => {
        return currencies[item]
    });
    res.json({
        success: true,
        length: filteredCurrencies.length,
        data: filteredCurrencies
    });
};

module.exports = searchCurrencyByValue;

