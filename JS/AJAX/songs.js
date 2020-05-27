function loadSongs()
{
    var Ulist = document.querySelector("#songsList");
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function()
    {
        if (this.status == 200 && this.readyState == 4)
        {
            var data = this.responseText;
            data = JSON.parse(data);
            var results = data.results;
            
            // enhanced for loop - For Each
            results.forEach(function(obj)
            {
                var li = document.createElement("li");
                li.style.width = "32%";
                li.style.border = "1px solid #000";
                li.style.margin ="0 0 30px 0";
                var h3 = document.createElement("h3");
                h3.innerText = obj.trackName;
                li.appendChild(h3);
                Ulist.appendChild(li);
            })
        }
    }
    request.open('get','songs.json');
    request.send();

}