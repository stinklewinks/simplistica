import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllPosts from './posts/all-posts/all-posts'
import SinglePost from './posts/single-post/single-post';
import SimpleTwoColumn from './menus/simple/simple-two-column'

function App() {
    return (
        <Router>
            <SimpleTwoColumn />
            <Routes>
                <Route path="/" element={<AllPosts />} />
                <Route path="/post/:postId" element={<SinglePost />} />
            </Routes>
        </Router>
    );
}

export default App;