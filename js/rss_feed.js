
    $(function() {
        var $content = $('.content');
        var data = {
            rss_url: 'https://medium.com/feed/@tosfan4ever'
        };
$.get('https://api.rss2json.com/v1/api.json', data, function(response) {
            if (response.status == 'ok') {
                var output = '';
                console.log(response);
$.each(response.items, function(k, item) {

                    var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
                    var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
                    var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
                    var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
                    var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
                    if(src.indexOf('jpg')!=-1)
                    {
                        output += '<div class="col-md-4"><div class="card .row-eq-height"><img class="card-img-top" src="'+src+'"><div class="card-block"><p class="card-title"><a href="' + item.link + '" >' + item.title + '</a></p><a href="' + item.link + '" class="btn-animated">More</a></div></div></div>';
                    }
                    else{
                       output += '<div class="col-md-4"><div class="card .row-eq-height "><img class="card-img-top" src="./images/writing.jpg"><div class="card-block"><p class="card-title"><a href="' + item.link + '" >' + item.title + '</a></p><a href="' + item.link + '" class="btn-animated">More</a></div></div></div>';
                     
                    }
                    //output += '<p>' + item.description + '</p>';
                });
$content.html(output);
}
});
});

