import './App.css';
import BestInstructors from './component/bestInstructors/BestInstructors';
import Category from './component/category/Category';
import Footer from './component/footer/Footer';
import HeroSection from './component/heroSection/HeroSection';
import Navbar from './component/navbar/Navbar';
import NewCourses from './component/newCourses/NewCourses';
import NewsLetter from './component/newsLetter/NewsLetter';
import Search from './component/search-panel/Search';
import TopCourses from './component/topCourses/TopCourses';
import YourCourses from './component/yourCourses/YourCourses';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Category/>
      <HeroSection/>
      <Search/>
      <NewCourses/>
      <BestInstructors/>
      <YourCourses/>
      <NewsLetter/>
      <TopCourses/>
      <Footer/>
    </div>
  );
}

export default App;
