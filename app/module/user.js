/**
 * Created by Administrator on 2016/1/15.
 */
var mongoose=require('mongoose');
var UserSchema=require('../schema/user');
var User=mongoose.model('User',UserSchema);
module.exports=User;

