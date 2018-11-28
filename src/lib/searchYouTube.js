var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.query}&maxResults=${options.max}&key=${options.key}&type=video&videoEmbeddable=true`,
    type: 'GET',
    dataType: 'json',
    success: (data) =>
      callback(data)
  });
};

export default searchYouTube;
