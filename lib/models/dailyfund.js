var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var DailyFundSchema = new Schema({
    userId: {
        type: String,
        required:true
    }, //查询id
    tradeDate: {
        type: String,
        required:true
    }, //交易日期
    previousFund: {
        type: Number,
        required:true
    }, //上日结存
    presentFund: {
        type: Number,
        required:true
    }, //当日结存
    riskdegree: {
        type: String,
        required:true
    }, //风险率
    dynamicFund: {
        type: Number,
        required:true
    }, //当日出入金（人民币）
    earning:{
      type:Number
    },
    earningRate:{
      type:String,
      index:true
    }
});

// ,{
//   toObject:{virtuals:true},
//   toJSON:{virtuals:true}
// }
// DailyFundSchema.virtual('earning').get(function(){
//   return this.presentFund-this.previousFund+this.dynamicFund;
// });
//
// DailyFundSchema.virtual('earningrate').get(function(){
//   var earningrate_f=(this.presentFund-this.previousFund+this.dynamicFund)/(this.previousFund+this.dynamicFund);
//   return earningrate_f.toFixed(4)*100+'%';
// });

module.exports = mongoose.model('DailyFund', DailyFundSchema);
