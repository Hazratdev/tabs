import './App.css';
import Sidebar from "./Sidebar";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
         <div className="">
           <Sidebar/>
             <Routes>
                 <Route path={"/"} element={<Home/>}/>
                 <Route path={"/orders"} element={<Orders/>}/>
                 <Route path={"/dashboard"} element={<Dashboard/>}/>
                 <Route path={"/custumers"} element={<Custumers/>}/>
                 <Route path={"/report"} element={<Report/>}/>
             </Routes>
         </div>
         <div>

         </div>
    </div>
  );
}

export default App;

const Home = () => {
     return <h1>Home</h1>
}
const Orders= () => {
    return <h1>Orders</h1>
}
const Dashboard= () => {
    return <h1>Dashboard</h1>
}
const Custumers= () => {
    return <h1>Custumers</h1>
}
const Report= () => {
    return <h1>Report</h1>
}