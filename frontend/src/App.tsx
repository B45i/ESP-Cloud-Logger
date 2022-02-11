import Button from 'antd/es/button';
import Modal from 'antd/es/modal';
import PageLayout from './layout/Layout';
import DeviceCard from './components/DeviceCard';
import './App.css';
import DeviceEditor from './components/DeviceEditor';

function App() {
    return (
        <PageLayout>
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
        </PageLayout>
    );
}

export default App;
