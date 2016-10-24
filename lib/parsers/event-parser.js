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
                    reContent = ""
            }

    }

}
