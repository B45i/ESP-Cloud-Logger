import Button from 'antd/es/button';
import Modal from 'antd/es/modal';
import PageLayout from './layout/Layout';
import DeviceCard from './components/DeviceCard';
import './App.css';
import DeviceEditor from './components/DeviceEditor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './layout/Auth';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    {/* <PageLayout>
                        <DeviceCard />
                        <Button
                            type="primary"
                            shape="circle"
                            size="large"
                            className="btn-add"
                            icon={<i className="fa-solid fa-plus"></i>}
                        />
                        <Modal
                            centered
                            title="Add New Device"
                            visible={true}
                            onOk={console.log}
                            onCancel={console.log}
                        >
                            <DeviceEditor />
                        </Modal>
                    </PageLayout> */}
                </Route>
                <Route path="/login" element={<Auth mode="login" />} />

                <Route path="/register" element={<Auth mode="register" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
