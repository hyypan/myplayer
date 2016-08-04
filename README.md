<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>myplayer</title>
    <script src="js/index.js"></script>
    <link href="css/index.css" type="text/css" rel="stylesheet">
</head>
<body>

<div class="player" id="myplayer">
    <video id="myvideo" class="vde"  ontimeupdate="control(this)">
        <source src="css/video.mp4" type="video/mp4"/>
          HTML5 Video is required for this example.
        <a href="css/video.mp4">Download the video</a>file
    </video>
    <div class="group">
       <div class="groupdiv">
           <div id="quick" class="qk"><<</div>
           <div class="plyprogress" id="proid"><div id="playprogress" class="progress"></div></div>
           <div id="quickt" class="qkt">>></div>

       </div>
        <div class="groupbtn">
            <div id="playtime" class="pltime"></div>
            <div  class="bt1" id="restart"  onclick="restart();"><img src="images/replay.png"></div>
            <div class="bt2" id="retreat"  onclick="skip(-10);"><img src="images/pre.jpg"></div>
            <div class="bt3" id="videoplay" onclick="videoplay();"><img src="images/play.jpg"></div>
            <div  class="bt4" id="forward"  onclick="skip(+10);"><img src="images/next.jpg"></div>
            <div class="groupvol">
                <span id="spanid"><img id="imgid" src="images/vol.jpg" ></span>
                <div  class="bt5" id="volsub">-</div>
                <div class="vol"><div id="vollenth" class="vollen"></div></div>
                <div id="voladd" class="voladd">+</div>
            </div>
            <!--<button id="setscreen">fullscreen</button>-->
        </div>
    </div>
</div>
</body>
</html>