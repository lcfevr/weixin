/**
 * Created by Administrator on 2016/5/18 0018.
 */




    var fs=require('fs');
    var jsSHA = require('jssha');
    var https=require('https');
    var request=require('request');
    var urlencode=require('urlencode');
    var User=require('./app/controller/user');

    module.exports = function(app){

        var responseWithJson = function (res, data) {

            res.json(data);

        };

        app.get('/',function(req,res){
            var redirect_url=urlencode('http://www.lcfevr6509.cn/scope');
            var url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appid+'&redirect_uri='+redirect_url+'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
            res.redirect(url)

        })

        app.get('/scope',function(req,res){
            var code=req.query.code;
            var url='https://api.weixin.qq.com/sns/oauth2/access_token?appid='+appid+'&secret='+secret+'&code='+code+'&grant_type=authorization_code';
            request(url,function(err,_res){
                var response=JSON.parse(_res.body)
                var accesstoken=response.access_token;
                console.log(accesstoken)
                var openid=_res.openid;
                var refresh_token=_res.refresh_token;
                var expires_in=_res.expires_in;
                //var time=+new Date().getTime()/1000;
                //if(+new Date().getTime()/1000-time>7000){
                //    var url='https://api.weixin.qq.com/sns/oauth2/refresh_token?appid='+appid+'&grant_type=refresh_token&refresh_token='+refresh_token+'';
                //    request(url,function(err,_resp){
                //
                //    })
                //}
                var infoUrl='https://api.weixin.qq.com/sns/userinfo?access_token='+accesstoken+'&openid='+openid+'&lang=zh_CN';
                request(infoUrl,function(err,_resp){
                    var _response=JSON.parse(_resp.body)
                    var nickname=_response.nickname;
                    var sex=_response.sex;
                    var province=_response.province;
                    var city=_response.city;
                    var country=_response.country;
                    var headImg=_response.headimgurl;
                    var privilege=_response.privilege  //json数组
                    console.log(nickname)

                    res.render('home')
                })
            })


        });


        app.get('/getAccess',function(req,res){
            getAccessToken(req,res);
        });


        app.get('/getPv',User.getPv)
        app.get('/updPv',User.updPv)
        //app.post('/insertPv',User.insertPV)
        app.get('/postPv',User.postPv)



        var appid='wxc19591d85bd9ab2f',

            secret='1ef3224bf861f63a486b2e742498d273';

        function getJsApiTiket(req,res,accessToken){

            var data=JSON.parse(fs.readFileSync('jsapi_ticket.json'));

            var app_id=appid,

                timestamp=time(),

                nonceStr=createNonceStr(),

                url='http://'+req.host+req.url; //必须动态获取

            if(data.expire_time<time()){

                var _url="https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token="+accessToken+"";

                request.get(_url,function(err,_res,str){

                    if(err){

                        console.log(err)

                    }
                    var resp=JSON.parse(str);
                    console.log(resp)

                    var ticket=resp.ticket;

                    if(ticket){

                        data.expire_time=parseInt(time())+7000;

                        data.jsapi_ticket=ticket;

                        fs.writeFileSync('jsapi_ticket.json',JSON.stringify(data))
                        
                    }else{

                        ticket=data.jsapi_ticket;

                    }
                    var _ticket=ticket,

                        signature=calcSignature(_ticket,nonceStr,timestamp,url)

                    console.log('ticket '+_ticket)

                    responseWithJson(res,{

                        noncestr:nonceStr,

                        timestamp:timestamp,

                        appid:app_id,

                        signature:signature,

                        url:url

                    })

                })

            }else{

                var _ticket=data.jsapi_ticket

                var signature=calcSignature(_ticket,nonceStr,timestamp,url)

                responseWithJson(res,{

                    noncestr:nonceStr,

                    timestamp:timestamp,

                    appid:app_id,

                    signature:signature,

                    url:url

                })

            }

        }
        //获取token

        function getAccessToken(req,res){

            var data=JSON.parse(fs.readFileSync('access_token.json'));

            if(data.expire_time<time()){

            var url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+appid+"&secret="+secret+"";

            request.get(url,function(err,_res,str){

                var resp=JSON.parse(str);
                console.log('resp'+resp)

                var access_token=resp.access_token;

                if(access_token){

                    data.expire_time=parseInt(time())+7000;

                    data.access_token=access_token;

                    console.log('access_token_1 '+access_token)

                    fs.writeFileSync('access_token.json',JSON.stringify(data));

                }else{

                    access_token=data.access_token;

                    console.log('access_token2'+access_token);

                }

                getJsApiTiket(res,access_token);

                })

            }else{

                getJsApiTiket(req,res,data.access_token);

            }

        }




        //时间戳生成函数
        function time(){

            return parseInt(new Date().getTime()/1000);

        }
        //随机字符串生成函数
        function createNonceStr(){

            var chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

            var str='';

            var max=chars.length

            for (var i = 0; i < 16; i++) {

                str += chars.charAt(Math.floor(Math.random() * max));

            }

            return str;

        }

        function calcSignature(jsapiTicket,nonceStr,timestamp,url){

            var str='jsapi_ticket='+jsapiTicket+'&noncestr='+nonceStr+'&timestamp='+timestamp+'&url='+url+'';

            var shaObj = new jsSHA(str, 'TEXT');

            var signature=shaObj.getHash('SHA-1', 'HEX');

            return signature

        }

    };




