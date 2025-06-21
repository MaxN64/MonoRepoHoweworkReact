import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main/Main';
import './global.css'
import Cart from './Pages/Cart/Cart';

import Footer from './components/Footer/Footer';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
   <Header/>
   <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/cart' element={<Cart/>}/>

 <Route path="/contacts" element={<Contacts />} />
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;