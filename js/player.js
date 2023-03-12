$('.video-item').on('click', function(){
    $('.video-item').removeClass('active');
    $(this).addClass('active');
    
    let videoUrl = $(this).attr('href');
    $('#youtube video source').attr('src', videoUrl);
    let video = document.getElementsByTagName('video')[0];
    video.load()
    return false;
});