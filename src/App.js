import { Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
import AOS from "aos";
import 'react-day-picker/dist/style.css';
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
import AddResult from './Pages/Dashboard/AddResult';
import Blog from './Pages/Blog/Blog';
import Notfound from './Pages/Shared/Notfound';
import Payment from './Pages/Dashboard/Payment';
import Registaion from './Pages/Registation/Registaion';
import ApplyUser from './Pages/Dashboard/ApplyUser';
import { useState } from 'react';
import { createContext } from 'react';
import useUsers from './Hooks/useUsers';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { useEffect } from 'react';
import Attendance from './Pages/Dashboard/Attendance';
import useAttendance from './Hooks/useAttendance';
export const userContext = createContext()
export const titleContext = createContext()
export const ProfileContext = createContext()
export const attendanceContext = createContext()

function App() {
  AOS.init();
  const [user] = useAuthState(auth)
  useEffect(() => {
    setProfileUser(user?.email)
  }, [user])

  const [users, students, teachers, gardens] = useUsers()
  const [applyUsers, setApplyUsers] = useState(0)
  const [title, setTitle] = useState('Dashboard')
  const [ProfileUser, setProfileUser] = useState(user?.email)
  const [userClass, setClass] = useState()
  const [attendance, dateAttendance, present, absent ] = useAttendance(userClass);

  return (
    <div className='max-w-7xl mx-auto'>
      <titleContext.Provider value={[title, setTitle]}>
      <ProfileContext.Provider value={[ProfileUser, setProfileUser]} >
      <attendanceContext.Provider value={[attendance, dateAttendance, present, absent ]}>
      <userContext.Provider value={[users, students, teachers, gardens]}>
      <Navbar userClass={userClass}></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Registaion />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/parses/:id' element={
          <RequireAuth><Parches /></RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard userClass={userClass} applyUsers={applyUsers} />
          </RequireAuth>
        }>
          <Route index element={<MyProfile setClass={setClass} />}></Route>
          <Route path='myOrder' element={<MyOrders />}></Route>
          <Route path='myOrder/payment/:id' element={<Payment />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='users' element={<RequireAdmin> <Users /></RequireAdmin>}></Route>
          <Route path='applyUser' element={<RequireAdmin> <ApplyUser setApplyUsers={setApplyUsers} /></RequireAdmin>}></Route>
          <Route path='addResult' element={<RequireAdmin> <AddResult userClass={userClass} /></RequireAdmin>}></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageOrder /></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><Attendance /></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      </userContext.Provider>
      </attendanceContext.Provider>
      </ProfileContext.Provider>
      </titleContext.Provider>
      <ToastContainer />
    </div>
  );
}
export default App;
