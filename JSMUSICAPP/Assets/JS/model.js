function Song(id,name,src,image)
{
    this.id = id;
    this.name = name;
    this.src = src;
    this.image = image;
}



var object = {
    "songPlayList" :[],
    addToPlayList:function(id,name,src,image)
    {
        var x = new Song(id,name,src,image);
        this.songPlayList.push(x);
    }

}