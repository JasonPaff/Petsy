import {Routes, Route} from 'react-router-dom';

// Importing Components
import BaseLayout from './BaseLayout';
import Landing from './pages/Landing';
import Login from './components/Authentication/Login'
import Logout from './components/Authentication/Logout'
import Search from "./pages/Search";
import Register from './components/Authentication/Register'
import ClientProfile from './pages/Profiles/ClientProfile';
import EditClient from './pages/EditProfile/EditClient';
import AddPet from './pages/Pet/AddPetPage';

function App() {
  return (
    <div>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ClientProfile />} />
          <Route path="/profile/account-info" element={<EditClient />} />
          <Route path="/profile/add-pet" element={<AddPet />} />
        </Routes>
      </BaseLayout>
    </div>
  );
}

export default App;