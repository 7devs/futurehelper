var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DailyPositionSchema = new Schema({
    userId: {
        type: String,
        required:true
    }, //交易id
    tradeDate: {
        type: String,
        required:true
    }, //交易日期
    contract: {
        type: String,
        required:true
    }, //合约名
    positionType: {
        type: Boolean,
        required:true
    }, //true:买持仓;false:卖持仓;
    lots: {
        type: Number,
        required:true
    }, //手数
    PriceAvg: {
        type: Number,
        required:true
    }, //平均价格
    settlementYesterday: {
        type: Number,
        required:true
    }, //昨日结算价
    settlementToday: {
        type: Number,
        required:true
    } //今日结算价
});

module.exports = mongoose.model('DailyPosition', DailyPositionSchema);
