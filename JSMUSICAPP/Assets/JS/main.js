window.addEventListener("load",init);
var audio;
function init()
{
    loadSongs();
    audio = document.querySelector("#audio");
    
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

}