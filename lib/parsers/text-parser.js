module.exports = function(content){
    var reContent;
    switch(content){
        case '1':
            reContent = '如果有任何期货排行榜的问题，请呼叫我们' + '\n' +
                        '电话：010-00000000' + '\n' +
                        'Email : xxx@xxx.com';
            break;
        case '2':
            reContent = '期货排行榜的规则×××';
            break;
        case '3':
            reContent = '总收益额 = ∑（每日收益额）' + '\n' +
                        '每日收益额 = 期末结存 – 起初结存 + 出入金' + '\n' +
                        '总收益率 = ∑（每日收益率）' + '\n' +
                        '每日收益率 = 每日收益额 /（期初结存 + 出入金）' + '\n' +
                        '最大回撤率 = MAX（收益回撤率）' + '\n' +
                        '收益回撤率 = （历史最大累计收益率 - 最新累计收益率）/（历史最大累计收益率 + 1）* 100%';
            break;
        default :
            reContent = '感谢您关注期货助手，输入序号可以查看相关问题：' + '\n' +
                        '1. 联系我们' + '\n' +
                        '2. 排行规则' + '\n' +
                        '3. 计算公式';
            break;
    }
    return reContent;
}
