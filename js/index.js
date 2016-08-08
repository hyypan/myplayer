
//暂停或播放
function videoplay(){
    var video=document.getElementById("myvideo");
    var button=document.getElementById("videoplay")
    if(video.paused){
        video.play();
        button.firstElementChild.setAttribute("src",'images/puse.jpg');
    }else
    {
        video.pause();
        button.firstElementChild.setAttribute("src",'images/play.jpg');
    }
}
//从头开始播放
function restart(){
    var video=document.getElementById("myvideo");
    video.currentTime=0;
}
//快进或者后退
function skip(value){
    var video=document.getElementById("myvideo");
    video.currentTime +=value;
}
//进度条和播放时间显示
function control(event){
    var totime=Math.floor(event.duration);
    var i=Math.floor(totime/60);
    var j=totime%60;
    var ctime= event.currentTime;
    var totalsc=Math.floor(event.currentTime);
    var minute=Math.floor(totalsc/60);
    var sec=totalsc%60;
    document.getElementById("playtime").innerHTML=minute+":"+sec+"/"+i+":"+j;//显示时间
    var video=document.getElementById("myvideo");
    var percent=ctime/video.duration;
    var progress=document.getElementById("playprogress");
    var pt=document.getElementById("proid");
    progress.style.width=percent*(pt.offsetWidth)+"px";
}

//音量设置
window.onload=function volume(){
	  var myVideo = document.querySelector('video');
    myVideo.addEventListener("contextmenu", function (e) { e.preventDefault(); e.stopPropagation(); }, false);

    // hide the controls if they're visible
    if (myVideo.hasAttribute("controls")) {
        myVideo.removeAttribute("controls")
    }
   var getwidth=window.screen.width;
    //document.getElementById("myplayer").setAttribute("width",getwidth);
    var video=document.getElementById("myvideo");
    //video.setAttribute("width",getwidth);

    var pt=document.getElementById("myplayer");

    document.getElementById("volsub").addEventListener("click",function(){
        video.volume-=0.1;
        var vollength=document.getElementById("vollenth");
        vollength.style.width=(video.volume)*40+"px";
    },true)
    document.getElementById("voladd").addEventListener("click",function(){
        video.volume+=0.1;
        var vollength=document.getElementById("vollenth");
        vollength.style.width=(video.volume)*40+"px";
    },false);
    document.getElementById("imgid").addEventListener("click", function (evt) {//静音设置
        if (video.muted) {
            video.muted = false;
            evt.target.setAttribute('src','images/vol.jpg')
        } else {
            video.muted = true;
            evt.target.setAttribute('src','images/voloff.jpg')
        }
    }, false);
    document.getElementById("proid").addEventListener("click",function(e){      //捕获进度条
        var e=e||event
        var length= e.pageX-pt.offsetLeft-20;

        var res=length/(pt.offsetWidth);
        var settime=(video.duration)*res;
       video.currentTime=settime;
    },false)
}

