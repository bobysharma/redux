import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Form from './Components/Form';
import Fakeapi from './Components/Fakeapi';
import { Link, Route, Routes } from 'react-router-dom';
import UpdateDetail from './Components/Updatedetail';
import Estore from './Components/Estore';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/form' element={<Form />} />
        <Route path="/update/:id" element={<UpdateDetail />} /> 
        <Route path="/estore" element={<Estore />} /> 
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
      </Routes>

      {/* <Home /> */}
      {/* <Form /> */}
      {/* <Fakeapi /> */}
    </div>
  );
}

export default App;
