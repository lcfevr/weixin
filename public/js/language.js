/**
 * Created by Administrator on 2016/5/25 0025.
 */
    //初始化
    var get = function(key) {
        return window.localStorage?localStorage.getItem(key):false;
    };
    var set = function(key, value) {
        return window.localStorage?localStorage.setItem(key, value):false;
    };




    window.SET = set;
    window.GET = get;

    var mySwiper = new Swiper ('.swiper-container', {
        direction : 'vertical',
        effect : 'coverflow',
        noSwiping : true,
        preloadImages: true,
    //virtualTranslate : true,
        mousewheelControl : true,
        onInit: function(swiper){
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper);
        },
        onTransitionEnd: function(swiper){
            swiperAnimate(swiper);
        },
        watchSlidesProgress: true,
        onSetTransition: function(swiper, speed) {
            for (var i = 0; i < swiper.slides.length; i++){
                es = swiper.slides[i].style;
                es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
            }
        }
    })


//预加载图片
preloadimages(["../img/bac.jpg","../img/begin.png","../img/broke.png","../img/circle.png","../img/content.png","../img/dsddf_03.png","../img/left_a.png","../img/next.png","../img/play.png","../img/prev.png","../img/questionBac.jpg","../img/questionCity.png", "../img/right_a.png","../img/title.png"]).done(function(images){
    console.log(images.length)
});
function preloadimages(arr){
    var newimages=[], loadedimages=0;
    var postaction=function(){};
    var arr=(typeof arr!="object")? [arr] : arr;
    function imageloadpost(){
        loadedimages++;
        if (loadedimages==arr.length){
            postaction(newimages)
        }
    }


    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image();
        newimages[i].src=arr[i];
        newimages[i].onload=function(){
            imageloadpost()
        }
        newimages[i].onerror=function(){
            imageloadpost()
        }
    }
    return {
        done:function(f){
            postaction=f || postaction
        }
    }
}


var dataJson={
    mp3:[ '../mp3/shaoyang1.mp3',
        '../mp3/shaoyang12.mp3',
        '../mp3/yueyang1.mp3',
        '../mp3/huarong1.mp3',
        '../mp3/loudi1.mp3',
        '../mp3/changde1.mp3',
        '../mp3/changde2.mp3',
        '../mp3/chenzhou1.mp3',
        '../mp3/chenzhou2.mp3',
        '../mp3/yongzhou1.mp3',
        '../mp3/hengyang1.mp3',
        '../mp3/hengyang2.mp3',
        '../mp3/yiyang1.mp3',
        '../mp3/xiangtan1.mp3',
        '../mp3/zhangjiajie1.mp3',
        '../mp3/zhangjiajie2.mp3',
        '../mp3/zhuzhou1.mp3',
        '../mp3/zhuzhou2.mp3',
        '../mp3/huaihua1.mp3',
        '../mp3/changsha1.mp3' ]


};
var reply=['方言大神，天哪！你已经达到湖南方言神级级别了！！','交际奇葩，可尝试与汪涵边搓麻将边飚方言','撮把子，在湖南多打磨几年吧,过两年咱们再来！','语癌患者，你真的有认真看题？随便点都比你答得好！'];
var data=[{"id":"1","city":"\u90b5\u9633\u5e02","problem":"\u82f9\u679c\u751c\u8fd8\u662f\u4e0d\u751c","answer_a":"A.\u751c","answer_b":"B.\u4e0d\u751c","answer_c":null,"answer_d":null,"right":"1"},{"id":"2","city":"\u90b5\u9633\u5e02","problem":"\u83ab\u6e2f\u66f9\u4ec0\u4e48\u610f\u601d","answer_a":"A.\u6ca1\u641e\u9519","answer_b":"B.\u6ca1\u8bf4\u9519","answer_c":"C.\u6ca1\u611f\u5230\u809a\u5b50\u997f","answer_d":null,"right":"1"},{"id":"3","city":"\u5cb3\u9633\u5e02","problem":"\u6311\u9a6c\u5b50\u662f\u4ec0\u4e48\u610f\u601d","answer_a":"A.\u7279\u610f","answer_b":"B.\u6311\u65f6\u95f4","answer_c":"C.\u9a6c\u4e0a","answer_d":null,"right":"0"},{"id":"4","city":"\u534e\u5bb9\u53bf","problem":"\u6c34\u662f\u70ed\u7684\u8fd8\u662f\u51b7\u7684","answer_a":"A.\u70ed\u7684","answer_b":"B.\u51b7\u7684","answer_c":null,"answer_d":null,"right":"1"},{"id":"5","city":"\u5a04\u5e95\u5e02","problem":"\u5982\u679c\u4eca\u5929\u662f10\u53f7\uff0c\u5979\u5a18\u662f\u54ea\u5929\u53bb\u7684\u5357\u5cb3","answer_a":"A.9\u53f7","answer_b":"B.8\u53f7 ","answer_c":"C.7\u53f7","answer_d":"D.6\u53f7","right":"2"},{"id":"6","city":"\u5e38\u5fb7\u5e02","problem":"\u64a9\u201d\u6307\uff1a\uff08 \uff09","answer_a":"A.\u806a\u660e","answer_b":"B.\u6728\u8bb7","answer_c":"C.\u6f02\u4eae","answer_d":"D.\u8c03\u76ae","right":"3"},{"id":"7","city":"\u5e38\u5fb7\u5e02","problem":"\u6216\u61d2\u884c\u7684\u610f\u601d\u662f","answer_a":"A.\u80fd\u5e72","answer_b":"B.\u8fd0\u6c14\u597d","answer_c":"C.\u5439\u725b","answer_d":"D.\u5ba3\u626c","right":"2"},{"id":"8","city":"\u90f4\u5dde\u5e02","problem":"\u70b8\u7ba1\u662f\u4ec0\u4e48\u610f\u601d","answer_a":"A.\u8336 ","answer_b":"B.\u70b8\u70ae","answer_c":"C.\u7518\u8517","answer_d":null,"right":"2"},{"id":"9","city":"\u90f4\u5dde\u5e02","problem":"\u8fd9\u53e5\u8c1a\u8bed\u7684\u4e0b\u4e00\u53e5\u662f\u4ec0\u4e48","answer_a":"A.\u4eba\u4eba\u5938","answer_b":"B.\u5f97\u68a6","answer_c":"C.\u60f3\u5176\u5c31\u5176","answer_d":"D.\u5fc3\u77e5\u809a\u660e","right":"1"},{"id":"10","city":"\u6c38\u5dde\u5e02","problem":"\u64ad\u4e1d\u662f\u4ec0\u4e48\u610f\u601d","answer_a":"A.\u8718\u86db","answer_b":"B.\u8001\u9f20 ","answer_c":"C.\u732b","answer_d":null,"right":"0"},{"id":"11","city":"\u8861\u9633\u5e02","problem":"\u626c\u6070\u6b66\u766b\u662f\u4ec0\u4e48\u610f\u601d","answer_a":"A.\u75af\u75af\u766b\u766b","answer_b":"B.\u7c97\u5fc3\u5927\u610f","answer_c":"C.\u53e3\u6c14\u5f88\u5927","answer_d":"","right":"2"},{"id":"12","city":"\u8861\u9633\u5e02","problem":"\u8fd9\u91cc\u662f\u6307\u624b\u673a\u600e\u4e48\u4e86","answer_a":"A.\u627e\u4e0d\u5230\u4e86","answer_b":"B.\u6389\u5728\u6c34\u91cc\u635e\u4e0d\u8d77\u6765\u4e86","answer_c":"C.\u624b\u673a\u6253\u4e0d\u901a\u4e86","answer_d":null,"right":"0"},{"id":"13","city":"\u76ca\u9633\u5e02","problem":"\u8fd9\u53e5\u8bdd\u662f\u662f\u4ec0\u4e48\u610f\u601d ","answer_a":"A.\u4f60\u662f\u8c01","answer_b":"B.\u4f60\u53bb\u505a\u4ec0\u4e48\u4e8b\u4e86","answer_c":"C.\u4f60\u641e\u5f97\u5230\u5904\u662f\u7684\u554a","answer_d":null,"right":"1"},{"id":"14","city":"\u6e58\u6f6d\u5e02","problem":"\u641e\u95f9\u54d2\u662f\u4ec0\u4e48\u610f\u601d\uff1f","answer_a":"A.\u641e\u9519\u4e86","answer_b":"B.\u641e\u5f97\u4e71\u4e03\u516b\u7cdf","answer_c":null,"answer_d":null,"right":"0"},{"id":"15","city":"\u5f20\u5bb6\u754c","problem":"\u8fd9\u53e5\u8bdd\u662f\u4ec0\u4e48\u610f\u601d\uff1f( )","answer_a":"A.\u4f60\u7ed9\u4f60\u59d1\u59d1\u4e00\u8d77\u53bb","answer_b":"B.\u628a\u90a3\u4e2a\u560e\u560e\u53eb\u7684\u9e21\u5e26\u8d70","answer_c":"C.\u4f60\u7ed9\u4f60\u5916\u5a46\u5939\u70b9\u7626\u8089","answer_d":"","right":"2"},{"id":"16","city":"\u5f20\u5bb6\u754c","problem":"\u8fd9\u53e5\u8bdd\u8bf4\u7684\u662f\u4ec0\u4e48\uff1f","answer_a":"A.\u4f60\u597d\u641e\u7b11","answer_b":"B.\u4f60\u597d\u4e56 ","answer_c":"C.\u4f60\u597d\u6076\u5fc3","answer_d":null,"right":"2"},{"id":"17","city":"\u682a\u6d32\u5e02","problem":"\u7b2c\u4e00\u4e2a\u5973\u751f\u662f\u5728\u8bf4\u4ec0\u4e48\uff1f","answer_a":"A.\u6211\u597d\u95f7\u554a\uff01","answer_b":"B.\u600e\u4e48\u8fd9\u4e48\u591a\u868a\u5b50\uff1f","answer_c":"C.\u600e\u4e48\u8fd9\u4e48\u591a\u4eba\u558a\u95f7\u554a\uff1f","answer_d":"","right":"1"},{"id":"18","city":"\u682a\u6d32\u5e02","problem":"\u987f\u8d77\u6765\u662f\u6307\u4ec0\u4e48\uff1f","answer_a":"A.\u7096\u4e86\u5403\u3002","answer_b":"B.\u7ad6\u8d77\u6765\u3002","answer_c":"C.\u505c\u4e0b\u6765\u3002","answer_d":"D.\u78e8\u5c16\u4e86\u3002","right":"1"},{"id":"19","city":"\u6000\u5316\u5e02","problem":"\u79cb\u679c\u5b50\u7684\u610f\u601d\u662f\u4ec0\u4e48\uff1f","answer_a":"A.\u79cb\u5929\u7684\u679c\u5b50","answer_b":"B.\u5c31\u8fd9\u6837","answer_c":null,"answer_d":null,"right":"1"},{"id":"20","city":"\u957f\u6c99\u5e02","problem":"\u8fd9\u4e2a\u7537\u751f\u5728\u63a8\u8350\u4ec0\u4e48\uff1f","answer_a":"A.\u6e56\u5357\u5934\u6761 ","answer_b":"B.\u5f17\u5170\u5934\u6761\uff08\u4ec5\u4f9b\u6e56\u5357\u4eba\u9009\u62e9\uff09","answer_c":null,"answer_d":null,"right":"1"}];
window.onload=function(){


        $.ajax({
            type:'get',
            url:'http://www.lcfevr6509.cn/getPv',
            dataType:'JSON',
            success:function(res){

                var data=JSON.parse(res);
                console.log(data);
                if(!!data){
                    for(var i= 0,arrayLengh=data.length;i<arrayLengh;i++){
                        question.pv.push(data[i])
                        $('.myPV .count').html(question.pv[0].pv).attr('objectId',question.pv[0]._id);
                    }
                    var objectId=$('.myPV .count').attr('objectId');
                    responseObject(objectId,function(data){
                        console.log(data)
                    })
                }else{
                    console.log('aaaaaa')
                }




            },
            error:function(err){
                console.log('aaa')
            }
        });
    function responseObject(objectId,callback){
        console.log('asdasd');
        if(!!objectId){
            $.ajax({
                type:'get',
                data:{objectId:objectId},
                url:'http://www.lcfevr6509.cn/postPv',
                dataType:'JSON',
                success:function(res){
                    if(res.status==200){
                        return function(){
                            return callback&&callback(objectId)
                        }
                    }
                }

            })


        }
    }

    $('.swiper-slide1 img').css('display','block');
    var title=document.querySelector('.title');
    var broke=document.querySelector('.broke');
    broke.style.display='none';
    title.addEventListener('webkitAnimationEnd',function(){
        title.style.transform='scale(1,1)';
        broke.style.display='block';

    },false)

    //开始游戏
    $('.begin').tap(function() {
        mySwiper.updateSlidesSize();
        console.log('aa'+mySwiper.slides.length)
        var isLastSlide=!!(mySwiper.activeIndex==(mySwiper.slides.length-1));
        question.nextQuestion(null,isLastSlide)
        mySwiper.slideTo(1, 1000, false);
        console.log('begin1 '+mySwiper.slides.length+mySwiper.activeIndex);
    });

    //音频播放

    $('.tap').live('tap',function(){
        console.log('a')
        var tap=$(this);
        var circle=tap.find('.circle');
        var audioAnimate=tap.find('.audioAnimate');
        var music=tap.find('.music');
        question.played(circle,audioAnimate,tap,music);
        return false;
    });
    var answerArray=[]
    //选择答案
    $('.answerContent').live('tap',function(){


        var _this=$(this);
        var radioVal=$(this).find('.radio'),
            id=mySwiper.activeIndex- 1,
            showRight=$('.showRight'),
            showFalse=$('.showFalse');


        if(!_this.hasClass('complete')){
            radioVal.attr('checked','true');
            _this.css('color','red').addClass('complete').siblings().addClass('complete').css('color','#373131');
            var answerChose=radioVal.attr('isTrue');
            console.log('answerChose'+answerChose);
            console.log('right'+data[id].right);
            if(answerChose!==data[id].right){
                showFalse.css('display','block').addClass('animated zoomIn').one('webkitAnimationEnd',function(){
                    setTimeout(function(){
                        showFalse.css('display','none').removeClass('animated zoomIn');
                    },1000)
                })
                var _id=_this.parent().parent().siblings('.pv').find('span').eq(0).attr('objectId');
                answerArray.push(_id);
                console.log(answerArray)
                var isLastSlide=!!(mySwiper.activeIndex==20);
                if(isLastSlide){
                    console.log('alla');
                    lookComment(_this);
                }
            }else{

                question.score+=5;
                score = question.score;
                showRight.css('display','block').addClass('animated zoomIn').one('webkitAnimationEnd',function(){
                    setTimeout(function(){
                        showRight.css('display','none').removeClass('animated zoomIn');
                    },1000)
                })
                $('#hideScore').val(question.score);
                var isLastSlide=!!(mySwiper.activeIndex==20);
                if(isLastSlide){
                    console.log('alla');
                    lookComment(_this);

                }
            }
        }
    })


    //上一题
    $('.prev').live('tap',function(){
        var tap=$(this).siblings('.questionAudio').find('.tap');
        var isFirstSlide=!!(mySwiper.activeIndex==0)
        if(mySwiper.activeIndex==1){
            return;
        }
        question.prevQuestion(tap,isFirstSlide);

    });



    //下一题
    $('.next').live('tap',function(){
        var tap=$(this).siblings('.questionAudio').find('.tap');
        console.log('tap1 '+tap.html())
        var isLastSlide=!!(mySwiper.slides.length==0||mySwiper.activeIndex==mySwiper.slides.length-1);
        question.nextQuestion(tap,isLastSlide);
        mySwiper.slideNext(function(){},1000);
        //var areaImg=document.querySelector('.questionCity');
        //question.renderCvs(areaImg);
    });

    //查看评价


        function lookComment(_this){

            var comment=_this.parent().parent();
            var score=parseInt(comment.siblings('.score').text());

            var great='';
            if(score>=0&&score<=30){
                great=reply[3];
            }else if(score>30&&score<=50){
                great=reply[2];
            }else if(score>50&&score<=80){
                great=reply[1];
            }else if(score>80&&score<=100){
                great=reply[0];
            }
            var html='';

            html+='<div class="wrap"><div class="ele">'+great+'</div></div>';
            comment.html(html);
            var str = '';
            for(var i=0;i<answerArray.length;i++){
                str+=answerArray[i]+',';
            }
            $.ajax({
                url:'http://www.lcfeve6509.cn/updPv',
                data:{dataAnswer:str},
                dataType:'json',
                type:'get',
                success:function(res){console.log(res)},
                error:function(err){
                    console.log(err);
                }
            });

            var chenghao = ['我在湖南方言大赛被评为语癌患者，你也来试试！','我在湖南方言大赛被评为撮把子，你也来试试！','我在湖南方言大赛被评为交际奇葩，你也来试试！','我以湖南方言大赛称神，你敢来战吗？'];
            $.ajax({
                url:'http://www.lcfevr6509.cn/getAccess' ,
                dataType:'json',
                type:'get',
                success:function(res){

                    var shaare_chenghao = '';
                    if(score>=0&&score<=30){
                        shaare_chenghao=chenghao[0];
                    }else if(score>30&&score<=50){
                        shaare_chenghao=chenghao[1];
                    }else if(score>50&&score<=80){
                        shaare_chenghao=chenghao[2];
                    }else if(score>80&&score<=100){
                        shaare_chenghao=chenghao[3];
                    }

                    var shareurl = "http://www.lcfevr6509.cn/";
                    var imgUrl = 'http://www.lcfevr6509.cn/public/img/begin.png';
                    var shareTitle = '湖南方言测试';
                    var shareContent = shaare_chenghao;
                    wx.config({
                        debug: true,
                        appId: res.appid,
                        timestamp: res.timestamp,
                        nonceStr: res.noncestr,
                        signature: res.signature,
                        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
                    });

                    wx.ready(function () { setShare(); });

                    function setShare(){
                        wx.onMenuShareTimeline({
                            title: shareContent,
                            link: shareurl,
                            imgUrl: imgUrl,
                            success: function () {addShare();},
                            cancel: function () {}
                        });
                        wx.onMenuShareAppMessage({
                            title: shareTitle,
                            desc: shareContent,
                            link:shareurl,
                            imgUrl: imgUrl,
                            type: 'link',
                            dataUrl: '',
                            success: function () {addShare();},
                            cancel: function () {}
                        });

                    }
                    function addShare(){
                        /*$.post('bin/controller/count.php', {}, function(data, textStatus, xhr) {

                         },"json");*/
                    }
                },
                error:function(){

                }
            });

        }


    var question={
        score:0, //得分
        areaImg:'../img/questionCity.png',
        questionImg:'',
        pv:[],
        tap:$('.tap'),
        isTap:true, //判断音乐是否播放
        sum:20,  //总slide数

        //点击播放方言
        played:function(circle,audioAnimate,tap,music){
            //是否存在music
            var isValid = !!(music && music != 'undefined');
                if(isValid){
                    if(this.isTap){
                        music[0].play();
                        audioAnimate.addClass('addClip');
                        tap.css('background','#e7e4df')
                        var isHide=!!(circle.css('display')!='none');
                        if(isHide){
                            circle.css('display','none')
                        }
                        this.isTap=false;
                        var isEnded=setInterval(function(){
                            if(music[0].ended){
                                audioAnimate.removeClass('addClip')
                                tap.css('background','#fff');
                                this.isTap=true;
                                clearInterval(isEnded);
                            }
                        },100)
                    }else{
                        music[0].pause();
                        music[0].currentTime=0.0;
                        audioAnimate.removeClass('addClip');
                        tap.css('background','#FFF');
                        this.isTap=true;
                    }
                }
        },
        //下一个slide
        nextQuestion:function(tap,isLastSlide){
            mySwiper.updateSlidesSize();

            var id=mySwiper.activeIndex
            console.log('id '+id)
            var html='';
            if(isLastSlide){
                    mySwiper.updateSlidesSize()
                    html+='<section class="swiper-slide swiper-slide2 swiper-no-swiping">';
                    html+='<p class="questionCity">'+data[id].city+'</p>';
                    html+='<div class="questionAudio">';
                    html+='<p class="tap">';
                    html+='<span>点击播放</span>';
                    html+='<img src="../img/play.png" class="audioAnimate">';
                    html+='<img src="../img/circle.png" class="circle"/>';
                    html+='<audio src="'+dataJson.mp3[mySwiper.activeIndex]+'" preload class="hide music"></audio>';
                    html+='</p>';
                    html+='</div>';
                    html+='<div class="score">';
                    html+='<span>'+this.score+'</span>';
                    html+='<span>分</span>';
                    html+='</div>';
                    html+='<div class="questionAndAnswer">';
                    html+='<p class="question">'+data[id].problem+'</p>'
                    html+='<div class="answer">';
                        if(data[id].answer_a){
                            html+='<ul class="answerContent">';
                            html+='<li class="answer_left"></li>';
                            html+='<li class="answer_main">'+data[id].answer_a+'</li>';
                            html+='<li class="answer_right"></li>';
                            html+='<input type="radio" class="radio" name="'+data[id]+'"  isTrue="0" style="display: none"/>'
                            html+='</ul>';
                        }

                        if(data[id].answer_b){
                            html+='<ul class="answerContent">';
                            html+='<li class="answer_left"></li>';
                            html+='<li class="answer_main">'+data[id].answer_b+'</li>';
                            html+='<li class="answer_right"></li>';
                            html+='<input type="radio" class="radio" name="'+data[id]+'" isTrue="1" style="display: none"/>'
                            html+='</ul>';

                        }

                        if(data[id].answer_c){
                            html+='<ul class="answerContent">';
                            html+='<li class="answer_left"></li>';
                            html+='<li class="answer_main">'+data[id].answer_c+'</li>';
                            html+='<li class="answer_right"></li>';
                            html+='<input type="radio" class="radio" name="'+data[id]+'" isTrue="2" style="display: none"/>'
                            html+='</ul>';

                        }

                        if(data[id].answer_d){
                            html+='<ul class="answerContent">';
                            html+='<li class="answer_left"></li>';
                            html+='<li class="answer_main">'+data[id].answer_d+'</li>';
                            html+='<li class="answer_right"></li>';
                            html+='<input type="radio" class="radio" name="'+data[id]+'" isTrue="3" style="display: none"/>'
                            html+='</ul>';
                        }
                    html+='</div>';
                    html+='</div>';
                    html+='<p class="pv ani">';
                    if(!this.pv[(id+1)]){
                        html+='<span>0人</span>';
                    }else{
                        html+='<span objectId="'+this.pv[(id+1)]._id+'">'+this.pv[(id+1)].pv+' 人</span>';
                    }

                    html+='<span>已被拦截在此题</span>';
                    html+='</p>';


                if(mySwiper.slides.length<this.sum){
                    html+='<img src="../img/next.png" class="next">';
                    html+='<img src="../img/prev.png" class="prev">';
                }else{
                    //最后一个slide，不输出next跟prev
                    //html+='<p class="reply">查看我的评价</p>'
                }
                    html+='</section>';
                    $('.swiper-wrapper').append(html);
                    //重新计算slide数量

                }
            mySwiper.updateSlidesSize();
            //如果存在tap,则暂停音乐播放
            if(tap){

                if(!this.isTap){
                    console.log('tap '+tap)
                    var music=tap.find('.music');
                    console.log('music '+music.hasClass('music'))
                    tap.css('background','#fff');
                    tap.find('.audioAnimate').removeClass('addClip')
                    music[0].pause();
                    music[0].currentTime=0.0;
                    this.isTap=true;
                }
            }
            //跳到下一个slide

        },
        //上一个slide
        prevQuestion:function(tap,isFirstSlide){
            //如果存在tap,则暂停音乐播放
            if(tap){
                if(!this.isTap){

                    var music=tap.find('.music');
                    tap.css('background','#fff');
                    tap.find('.audioAnimate').removeClass('addClip')
                    music[0].pause();
                    music[0].currentTime=0.0;
                    this.isTap=true;
                }
            }
            if(isFirstSlide) return;
            //跳到上一个slide
            mySwiper.slidePrev(function(){},1000);
        },

        //缓存图片到localstorage
        renderCvs:function(areaImg){
            var cvs = document.createElement('canvas');
            cvs.style.display = 'none';
            document.body.appendChild(cvs);
            var rcvs = cvs.getContext('2d');
            cvs.width = areaImg.width;
            cvs.height = areaImg.height;
            rcvs.drawImage(areaImg,0,0,areaImg.width,areaImg.height);
            setTimeout(function(){
                var data = cvs.toDataURL();
                SET('imgList_'+mySwiper.activeIndex,data)
                document.body.removeChild(cvs);
            },200);

        },


    }

};

