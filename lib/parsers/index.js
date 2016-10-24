module.exports = function(data){
    var msgType = data.msgtype,
        reContent;

    switch(msgType){
        case 'text':
            reContent = require('/text-parser')(data.content);
            break;
        case 'event':
            reContent = require('/event-parser')(data);
            break;
        case 'voice':
            reContent = require('/voice-parser')(data.recognition);
            break;
        case 'image':
            reContent = "暂时不支持图片，请发送文字，谢谢";
            break;
        case 'video':
            reContent = "暂时不支持视频，请发送文字，谢谢";
            break;
        case 'shortvideo':
            reContent = "暂时不支持小视频，请发送文字，谢谢";
            break;
        case 'location':
            reContent = "欢迎来我司做客，我们的坐标是：北京市东城区朝阳门北大街6号"
            break;

        default:
            reContent = '累么？歇会吧';
            break;
    }
    return reContent;
}
