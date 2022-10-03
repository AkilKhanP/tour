
import Header from "./components/home/Header";
import Banner from "./components/home/Banner";
import Place from "./components/home/Place";
import PlacesAdd from "./components/home/PlacesAdd";
import UpcomingEvent from "./components/home/UpcomingEvent";
import Hotal_Restorent from "./components/home/Hotal_Restorent";
import ClientReviewSection from "./components/home/ClientReviewSection";
import Services from "./components/home/Services";
import Footer from "./components/home/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetailSection from "./components/blogdetail/BlogDetailSection";
import BlogDetail from "./pages/BlogDetail";
import TopPlace from "./pages/TopPlace";
import TourDetail from "./pages/TourDetail";
import Conditions from "./components/home/Conditions";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
     <Routes>
     {/* <Route  element={<Header/>}/> */}
     <Route exact  path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/packages" element={<Packages/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/blog" element={<Blog/>}/>
     <Route path="/blogdetail" element={<BlogDetail/>}/>
     <Route path="/topplace" element={<TopPlace/>}/>
     <Route path="/tourdetail" element={<TourDetail/>}/>
     </Routes>
     <Footer/>
     
     </BrowserRouter>

     {/* <Header/>
      <Home/>
      <About/>
      <Footer/> */}
    </div>
  );
}

export default App;
