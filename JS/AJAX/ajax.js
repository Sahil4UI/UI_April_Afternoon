window.addEventListener("load",init);
function init()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = this.responseText;
            data = JSON.parse(data);
            var p = document.createElement("p");
            var img = document.createElement("img");
            img.style.width="25%";
            img.style.height = "300px";
        
            var profile = data.profile;
            var playerImage = data.imageURL;
            p.innerText = profile;
            img.src = playerImage;

            div = document.querySelector("#PlayerProfile");
            div.appendChild(p);
            div.appendChild(img);

            

            
        }
    }
    xhttp.open('get','https://cricapi.com/api/playerStats?apikey=3hpqnUB5ofTM4gxGEfIcNj1eb1M2&pid=35320');
    xhttp.send();
}