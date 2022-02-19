import Layout from 'antd/es/layout';
import Button from 'antd/es/button';
import Modal from 'antd/es/modal';
import Sidebar from '../components/Sidebar';
import DeviceEditor from '../components/DeviceEditor';
import DeviceCard from '../components/DeviceCard';
import { useState } from 'react';

const { Header, Content, Footer } = Layout;

const PageLayout = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Layout className="page-layout">
            <Header className="page-header">ESP Data Logger</Header>
            <Layout>
                <Sidebar />
                <Layout className="site-layout">
                    <Content className="page-content">
                        <DeviceCard />
                    </Content>
                    <Footer className="page-footer">B45i</Footer>
                </Layout>
            </Layout>

            <Button
                type="primary"
                shape="circle"
                size="large"
                className="btn-add"
                onClick={() => setShowModal(true)}
                icon={<i className="fa-solid fa-plus"></i>}
            />
            <Modal
                centered
                title="Add New Device"
                visible={showModal}
                onOk={() => setShowModal(false)}
                onCancel={() => setShowModal(false)}
            >
                <DeviceEditor />
            </Modal>
        </Layout>
    );
};

export default PageLayout;
