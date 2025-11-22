import { Routes, Route } from 'react-router-dom';
import './App.css';
import MovieCard from './components/MovieCard';
import Header from './components/Header';
import Footer from './components/Footer';
import Discover from './components/Discover';
import ComingSoon from './components/ComingSoon';
import Lists from './components/Lists';
import { moviesData} from "./moviesData";
import Films from './components/Films';

function App() {


  return (
    <>
    <Header
      title="ITBFlix"
      searchPlaceholder="Search Movies & TV"
      navItems={["Films", "Discover", "Coming Soon", "Lists"]}
      links={["/films","/discover","/coming-soon","/lists"]}
    />
    <Routes>
        <Route path="/" element={<Films/>} />
        <Route path="/films" element={<Films/>} />
        <Route path="/discover" element={<Discover/>} />
        <Route path="/coming-soon" element={<ComingSoon/>} />
        <Route path="/lists" element={<Lists/>} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
