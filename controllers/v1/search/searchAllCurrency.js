const currencies =  require('./Common-Currency');
const getFlagUrl = require('../../../utils/getFlagUrl');

const searchAllCurrencies = (req, res) => {
    const { limit, _page } = req.query;
    if(limit && _page){
        const keys = Object.keys(currencies);
        const index = (Number(_page) - 1) * 10;
        const upperIndex = index + Number(limit);
        const paginatedKeys = keys.slice(index , upperIndex);
        const paginatedData = paginatedKeys.map(item => {
            return currencies[item]
        });
        const paginatedCurrenciesWithFlag = paginatedData.map(item => {
            return {
                ...item,
                flag: getFlagUrl((item.code).toLowerCase())
            }
        });
        res.json({
            success: true,
            length: paginatedKeys.length,
            data: paginatedCurrenciesWithFlag
        });
    }else {
        const length = Object.keys(currencies).length;
        const currenciesWithFlag = Object.keys(currencies).map(item => {
            return {
                ...currencies[item],
                flag: getFlagUrl((currencies[item].code).toLowerCase())
            }
        });
        res.json({
            success: true,
            length: length,
            data: currenciesWithFlag
        });
    }
};

module.exports = searchAllCurrencies;

