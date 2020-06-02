window.addEventListener("load",init);
var audio,flag = false,slider;
function init()
{
    loadSongs();
    audio = document.querySelector("#audio");
    prevBtn = document.querySelector("#prev");
    playBtn = document.querySelector("#play");
    playBtn.addEventListener("click",playPause);
    nextBtn = document.querySelector("#next");
    songTotalTime = document.querySelector("#song_total_time");
    songCurrTime = document.querySelector("#song_curr_time");
    slider  = document.querySelector("#slider");    
    slider.addEventListener('change',peekSong);
}



function loadSongs()
{
   var ul = document.querySelector("#songsList");
   ul.className="row";
   songsList.forEach(function(obj)
   {
       var li = document.createElement("li");
    //    li.className="col-lg-3 col-md-4 col-sm-6"
    //    li.title = obj.songId;
          li.setAttribute('title',obj.songId);
       var h3 = document.createElement("h3");
       h3.innerText = obj.songName;
       var  p  = document.createElement("p");
       p.innerText = obj.artistname;
       var img = document.createElement("img");
       img.src = obj.songImage;
       img.className="w-100";

       li.appendChild(img);
       li.appendChild(h3);
       li.appendChild(p);
       ul.appendChild(li);
       li.addEventListener('click',playSong);
   })

}

function playSong()
{
    var id = event.srcElement.title;
    for (i=0;i<songsList.length;i++)
    {
        if (songsList[i].songId == id)
        {
            var songSrc = songsList[i].songSrc;
            break;
        }
    }
    audio.src = songSrc;
    audio.play();
   
    setInterval(function()
    {
        slider.value = audio.currentTime;
        var currminutes = parseInt(slider.value/60);
        var currseconds = parseInt(slider.value%60);
        if (currseconds<59)
        {
        
             songCurrTime.innerHTML = "0"+currminutes+":"+currseconds;
        }
        else{
            currseconds=0;
            songCurrTime.innerHTML = "0"+currminutes+":"+currseconds;

        }
        
    },1000);

    setTimeout(
        function()
        {
            duration = audio.duration;
            console.log(duration);
            slider.max = duration;
            var minutes = parseInt(duration/60);
            var seconds = parseInt(duration%60);
            songTotalTime.innerHTML = "0"+minutes+":"+seconds;
            
        },500
    );

    flag=true;
    playPause();

}

function playPause()
{
    if (flag == true)
    {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        audio.play();
        
        
    }
    else{
        playBtn.innerHTML = '<i class="far fa-play-circle"></i>'
        audio.pause();
    }

    flag = !flag;

}

function peekSong()
{
    audio.currentTime = slider.value;
}