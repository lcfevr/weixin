/**
 * Created by Administrator on 2016/1/19.
 */

var User=require('../module/user');






exports.getPv=function(req,res){
    User.fetch(function (err, pv) {
        if (err) {
            console.log(err)
        }


            res.json(pv)

    })
    //var id=
    //User.update({_id:id})
};

exports.postPv=function(req,res){
    var objectId=req.param('objectId');
    console.log(objectId)
    User.findById(objectId,function(err,user){
        user.update({$inc:{pv:1}},function(err){
            if(err){
                console.log(err)
            }

            res.json({status:200})
        })
    })
}

//exports.insertPV=function(req,res){
//    var pv=req.body.pv;
//    console.log('pv'+pv);
//    var user=new User({
//        'pv':pv
//    });
//    console.log(user.save())
//    console.log('before save')
//    user.save(function(err,user){
//        console.log('asdgafs')
//        if(err){
//            console.log(err)
//        }
//
//        console.log('save')
//
//        res.redirect('/')
//    })
//
//    console.log('after save')
//};


exports.updPv=function(req,res){
    var data=req.query.dataAnswer;
    var dataArray=data.split(',');

    for(var i=0;i<dataArray.length;i++){
        User.findById({_id:dataArray[i]},function(err,user){
            console.log('user  '+user)
            if(err){
                console.log(err)
            }

            user.update({$inc:{pv:1}},function(err){
                if(err){
                    console.log(err)
                }
            })
            res.json(1)
        })
    }

}






/**
 * Created by Sherry on 2016/6/2.
 */
