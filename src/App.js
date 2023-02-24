import Layout from "./components/Layout";
import { Routes ,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";


function App() {
    return (
        <Layout>
            <Routes>

            <Route path='/home' element={<Home/>} />
            <Route path='/destinations' element={<Destinations/>} />
            <Route path='/crew' element={<Crew/>} />
            <Route path='/technology' element={<Technology/>} />
            </Routes>
        </Layout>
    );
}

export default App;