import { Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
import AOS from "aos";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Login/RequireAuth'
import RequireAdmin from './Pages/Login/RequireAdmin'
import Parches from './Pages/Parches/Parches';
import Users from './Pages/Dashboard/Users';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import AddProduct from './Pages/Dashboard/AddProduct';
import Blog from './Pages/Blog/Blog';
import Protfolio from './Pages/Protfolio/Protfolio';
import Notfound from './Pages/Shared/Notfound';
import Payment from './Pages/Dashboard/Payment';
import Registaion from './Pages/Registation/Registaion';


function App() {
  AOS.init();
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Registaion />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/Portfolio' element={<Protfolio />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/parses/:id' element={
          <RequireAuth><Parches /></RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile />}></Route>
          <Route path='myOrder' element={<MyOrders />}></Route>
          <Route path='myOrder/payment/:id' element={<Payment />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='users' element={<RequireAdmin> <Users /></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin> <AddProduct /></RequireAdmin>}></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageOrder /></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProduct /></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
