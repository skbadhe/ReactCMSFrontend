import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Content from './content';
import NavBar from './nav';
import Create from './create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Content />}></Route>
              <Route exact path="/create" element={<Create />}></Route>
              <Route path="/blogs/:id" element={<BlogDetails/>}></Route>
            </Routes>
          </div>
      </div>
    </Router>

  );
}

export default App;