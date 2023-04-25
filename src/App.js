import {Routes,Route} from 'react-router-dom';
import Spam from './Component/Spam'
import Trash from './Component/trash/Trash'
import SideNav from './Component/nav/SideNav';
import Inbox from './Component/inbox/Inbox';
import Star from './Component/star/Star';
import IndividualEmail from './Component/individualEmail/IndividualEmail';
import ReadSpam from './Component/readSpam/ReadSpam';
export default  function App(){

  return(
    <>
      <SideNav/>
    <Routes>
    
      <Route path='spam' element={<Spam/>}/>
      <Route path='trash' element={<Trash/>}/>
      <Route path='/' element={<Inbox/>}/>
      <Route path='star' element={<Star/>}/>
      <Route path='/individual/:Id' element={<IndividualEmail/>}/>
      <Route path='/readspam/:Id' element={<ReadSpam/>}/>

      
    </Routes>
    
    </>
  )
}