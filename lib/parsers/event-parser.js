var conf = require('../config.js'),
    wechat = require('../wechat.js');

module.exports = function(data){
    var event = data.event.toLowerCase(),
        eventKey =data.eventkey,
        reContent;

    switch(event){
        case 'click':
            switch(eventKey){
                case '品种排行':
                    reContent = "";
                    break;
            }
            break;
        default:
            reContent = '欢迎您关注期货助手，我们力求发掘期货投资高手，提供完整的业绩鉴证平台。';
            break;

    }

}
