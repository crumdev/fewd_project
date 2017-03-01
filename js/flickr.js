
var flickrAPI = {
    key:"aa9a9c9170f71f48ce09da56437fdf65",
    method: "flickr.photos.search",
    format: "json",
    tags:"cockapoo",
    contentType:"1",
    page:"1",
    perPage:"4",
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
        images += "<div class=\"card column is-3-tablet\">";
            images += "<div class=\"card-image\">"; 
                images += "<figure class=\"image dogPic\">";
                images += `<img src=\"https://farm${photo[i].farm}.staticflickr.com/${photo[i].server}/${photo[i].id}_${photo[i].secret}_q.jpg\">`;
                images += "</figure></div>";
            images += "<div class=\"card-content\"><div class=\"media\"><div class=\"media-content\">";
                images += `<p class=\"title is-4\">${randomEl(adjectives)+' '+randomEl(nouns)}</p></div></div>`;
            images += "<div class=\"content\"><p>Ex direct trade aliquip fam, single-origin coffee vero church-key.</p></div><nav class=\"level is-mobile\"><div class=\"level-left is-mobile\"><a class=\"level-item\"><span class=\"icon is-small\"><i class=\"fa fa-reply\"></i></span></a><a class=\"level-item\"><span class=\"icon is-small\"><i class=\"fa fa-retweet\"></i></span></a><a class=\"level-item\"><span class=\"icon is-small\"><i class=\"fa fa-heart\"></i></span></a></div></nav></div></div>";
    }
    document.getElementById('animals').innerHTML = images;
};

/*
Flickr API Keys
key: aa9a9c9170f71f48ce09da56437fdf65
secret: 61a07da6138e2487
*/


/*
 * Random Name generator borrowed from https://jsfiddle.net/katowulf/3gtDf/
 * to create names for the featured pets.
 */
 
 function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return toTitleCase(list[i]);
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

var adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
var nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];