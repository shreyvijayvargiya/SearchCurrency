const currencies =  require('./Common-Currency');

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
        res.json({
            success: true,
            length: paginatedKeys.length,
            data: paginatedData
        });
    }else {
        const length = Object.keys(currencies).length;
        res.json({
            success: true,
            length: length,
            data: currencies
        });
    }
};

module.exports = searchAllCurrencies;

