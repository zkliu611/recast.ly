import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current : exampleVideoData[0],
      search : 'react'
    };
  }
  
  onClick(event, video){
    this.setState({
      current : video
    });
  }
  
  handleChange(event) {
    this.setState({
      search : event.target.value
    });
  }
  
  handleSubmit(event) {
    console.log(this.state.search);
    event.preventDefault();
  }
  
  render(){
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
        <VideoList videos={exampleVideoData} onClick={this.onClick.bind(this)}/>
      </div>
    </div>
  </div>
    )
  } 
}

export default App;

