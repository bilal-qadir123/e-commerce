

import Hero from '../components/Hero'; 
import LatestCollection from '../components/LatestCollection'; 
import Pagination from '../components/Pagination'; 
import BestSeller from '../components/BestSeller'; 
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox'; 
import SearchBar from '../components/SearchBar'; 
function Home() {
  return (
    <div> 
      <Hero /> 
      <LatestCollection /> 
      <center> 
        <BestSeller /> 
      <OurPolicy /> 
      <NewsLetterBox /> 
      <Pagination /> 
      </center> 
    </div>
  )
}

export default Home; 