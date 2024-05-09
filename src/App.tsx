import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import Notes from "./pages/Notes"

function App() {


  return (
    <Router>
      <Routes>
        <>
          <Route path = "/" element={<Notes />}/>
            

        </>
      </Routes>

    </Router>
  
    );
}

export default App
