var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    key: 'AIzaSyDajm7TgH_M-VoKPa05qktlkkY--mXEL4w',
    type: 'GET',
    dataType: 'json',
    query: options,
    max: 5,
    videoEmbeddable: true,
    success: callback
  });
};

export default searchYouTube;
