import Form from 'antd/es/form';
import Button from 'antd/es/button';
import Input from 'antd/es/input';

const DeviceEditor = () => {
    const [form] = Form.useForm();

    const formChangeHandler = (val: any) => {
        console.log(val);
    };

    return (
        <Form
            layout="vertical"
            requiredMark={true}
            form={form}
            initialValues={{
                name: 'test',
            }}
            onValuesChange={formChangeHandler}
        >
            <Form.Item label="Name" name="name" required>
                <Input placeholder="Device Name" />
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input placeholder="Description" />
            </Form.Item>
            <Form.Item label="Location" name="location">
                <Input placeholder="Location" />
            </Form.Item>
        </Form>
    );
};

export default DeviceEditor;
