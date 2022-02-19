import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './layout/Auth';
import PageLayout from './layout/Layout';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout></PageLayout>} />
                <Route path="/login" element={<Auth mode="login" />} />
                <Route path="/register" element={<Auth mode="register" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
