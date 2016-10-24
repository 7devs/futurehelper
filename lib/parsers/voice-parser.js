module.exports = function(content){
    var reContent = content;
    if(content){
        return reContent;
    }else{
        return '无法识别，您还是发送文字吧'
    }
}
