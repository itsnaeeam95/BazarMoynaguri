
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Signup from "./signup";
import { Routes, Route} from "react-router-dom"
import Home from "./Home";
import Search from "./Search";



function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Home.js" element={<Home/>}/>
          <Route path="/Search.js" element={<Search/>}/>
          <Route path="/Signup.js" element={<Signup/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
