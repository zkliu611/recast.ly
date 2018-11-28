import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
// import searchYouTube from '../lib/searchYouTube.js';

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      current: exampleVideoData[0],
      search: 'cats',
      searchResult: exampleVideoData
    };
    
    // this.options = {
    //   key: YOUTUBE_API_KEY,
    //   query: this.state.search,
    //   max: 5,
    // };
  }
  
  onClick(event, video) {
    this.setState({
      current: video
    });
  }
  
  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }
  
  handleSubmit(event) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: this.state.search,
      max: 5
    };
    this.props.searchYouTube(options, (data) => this.setState({
      searchResult: data.items,
      current: data.items[0]
    }));
    event.preventDefault();
  }
  
  // dataCallback(data) {
  //   console.log(this);
  //   this.setState({
  //     current: data[0],
  //     searchResult: data
  //   });
  //   console.log(this.state.searchResult);
  // }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.searchResult} onClick={this.onClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;

