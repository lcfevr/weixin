/**
 * Created by Sherry on 2016/6/2.
 */
/**
 * Created by Administrator on 2016/1/6.
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var UserSchema=new Schema({
    pv:{
        type:Number,
        default:0
    },
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }

})

UserSchema.pre('save',function(next){
    var user=this
    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now()
    }else{
        this.meta.updateAt=Date.now()
    }

    next()
})

//静态方法
UserSchema.statics={
    fetch:function(cb){
        return this.find({}).sort('meta.updateAt').exec(cb)
    },

    findById:function(id,cb){
        return this.findOne({_id:id}).sort('meta.updateAt').exec(cb)
    }
}


module.exports=UserSchema