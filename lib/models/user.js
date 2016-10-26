var mongoose=require('mongoose'),
    Schema=mongoose.Schema;

var UserSchema=new Schema({
  openId:{type:String,required:true},//关注者openid
  userId:{type:String,required:true},//关注者查询id
  password:{type:String,required:true},//查询密码
  email:{type:String},//邮箱
  nickname:{type:String},//微信昵称
  cellphone:{type:String},//手机号码
  timestamp:{type:Date,'default':Date.now()}//添加时间
});

module.exports=mongoose.model('User',UserSchema);
