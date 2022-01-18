import video from "../data/video.js";

import Video from './Video'
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video);

  return (
    <div class="App">
      <Video
        url={video.embedUrl}
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}/>
      <Comments 
        comments={video.comments}/>
    </div>
  );
}

export default App;
