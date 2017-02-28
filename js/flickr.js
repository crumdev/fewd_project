
var flickrAPI = {
    key:"aa9a9c9170f71f48ce09da56437fdf65",
    method: "flickr.photos.search",
    format: "json",
    tags:"sad%20dogs",
    contentType:"1",
    page:"1",
    perPage:"8",
    privacyFilter:"1",
}
var picsURL = `https://api.flickr.com/services/rest/?api_key=${flickrAPI.key}&method=${flickrAPI.method}&format=${flickrAPI.format}&tags=${flickrAPI.tags}&content_type=${flickrAPI.contentType}&page=${flickrAPI.page}&per_page=${flickrAPI.perPage}&nojsoncallback=?&privacy_filter=${flickrAPI.privacyFilter}`;

$.ajax({
    url: picsURL,
    method: "GET",
    dataType: "text",
    success: callback
});

function callback (resp) {
    rawData = JSON.parse(resp);
    var photo = rawData.photos.photo;
    var images = "";
    for (var i = 0; i < photo.length; i++) {
        images += "<div class=\"card column is-one-third-tablet is-one-quarter-desktop\">";
            images += "<div class=\"card-image\">"; 
                images += "<figure class=\"image dogPic\">";
                images += `<img src=\"https://farm${photo[i].farm}.staticflickr.com/${photo[i].server}/${photo[i].id}_${photo[i].secret}_q.jpg\">`;
                images += "</figure></div>";
            images += "<div class=\"card-content\"><div class=\"media\"><div class=\"media-content\">";
                images += "<p class=\"title is-4\">Spot</p></div></div>";
            images += "<div class=\"content\"><p>Ex direct trade aliquip fam, single-origin coffee vero church-key.</p></div></div></div>";
    }
    document.getElementById('animals').innerHTML = images;
};

/*
Flickr API Keys
key: aa9a9c9170f71f48ce09da56437fdf65
secret: 61a07da6138e2487
*/