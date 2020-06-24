$(document).ready(function() {
    $.ajax({
        url: "https://www.reddit.com/top.json?utm_source=reddit&utm_medium=usertext&utm_name=redditdev&utm_content=t3_elp5pl"
    }).then(function(data) {
        $('.greeting-id').append(data.id);
        $('.greeting-content').append(data.content);
    });
});