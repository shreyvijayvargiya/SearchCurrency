
function getFlagUrl(code){
    if(code){
        return `https://wise.com/public-resources/assets/flags/rectangle/${code}.png`
    }else {
        return null
    }
}
module.exports = getFlagUrl;
