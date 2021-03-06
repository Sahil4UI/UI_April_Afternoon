window.addEventListener("load",init);
var audio,flag = false,slider;
function init()
{
    loadSongs();
    audio = document.querySelector("#audio");
    prevBtn = document.querySelector("#prev");
    prevBtn.addEventListener("click",prevSong);
    playBtn = document.querySelector("#play");
    playBtn.addEventListener("click",playPause);
    nextBtn = document.querySelector("#next");
    nextBtn.addEventListener("click",nextSong);
    songTotalTime = document.querySelector("#song_total_time");
    songCurrTime = document.querySelector("#song_curr_time");
    slider  = document.querySelector("#slider");    
    slider.addEventListener('change',peekSong);
    loadMyPlaylist();
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
       h3.className ="text-center"
       var  p  = document.createElement("p");
       p.innerText = obj.artistname;
       p.className ="text-center";
       var img = document.createElement("img");
       img.src = obj.songImage;
       img.className="w-100";
       var button = document.createElement('button');
       button.innerText = "ADD TO PLAYLIST";
       button.className ="btn btn-info d-block w-100 ";
       button.addEventListener('click',addToPlayList);
       li.appendChild(img);
       li.appendChild(h3);
       li.appendChild(p);
       li.appendChild(button);
       ul.appendChild(li);

       img.addEventListener('click',playSong);
       h3.addEventListener('click',playSong);
   })

}

function playSong()
{
    console.log("play music called");
    var id = event.srcElement.parentElement.title;
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


function nextSong()
{   var currSong = audio.src;
    currSong = currSong.slice(22,currSong.length);
    currSong = currSong.replace(/%20/g , ' ');
    
    var next_song;
    for (i=0;i<songsList.length;i++)
    {
        if (currSong == songsList[i].songSrc)
        {
            next_song = songsList[i+1].songSrc;
            break;
        }

    }
    audio.src =next_song;
    audio.play();
    flag = true;
    playPause();
    
}

function prevSong()
{
    

}

function addToPlayList()
{
    
    var addSongId = event.srcElement.parentElement.title;
    for (var i=0; i<songsList.length;i++)
    {
        if (songsList[i].songId == addSongId)
        {
            var songObj = songsList[i];
            object.addToPlayList(songObj.songId,songObj.songName,songObj.songSrc,songObj.songImage);
            break;
        }
    }
    printPlayList();
    saveMyPlaylist();
}

function printPlayList()
{
    var ul1 = document.querySelector("#playList");
    ul1.innerHTML="";
    object.songPlayList.forEach(function(obj)
    {
        var span = document.createElement("span");
        span.innerText = obj.name;
        span.style.marginLeft ="15px";
       
    
        var img = document.createElement("img");
        img.src = obj.image;
        img.className="w-25";

        var li = document.createElement('li');
        li.style.margin ="10px 2px";
        li.appendChild(img);
        li.appendChild(span);
        ul1.appendChild(li);
    })

}

function saveMyPlaylist()
{
    if (window.localStorage)
    {

        var json = JSON.stringify(object.songPlayList);
        localStorage.setItem("myPlayList",json);
    }
}

function loadMyPlaylist()
{
    if(window.localStorage)
    {
        var savedPlayList = localStorage.getItem("myPlayList");
        object.songPlayList = JSON.parse(savedPlayList);
        printPlayList();
    }
}

