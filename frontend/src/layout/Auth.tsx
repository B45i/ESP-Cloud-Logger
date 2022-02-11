import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// todo:  if already login then go to home page

type AuthProps = {
    mode: 'login' | 'register';
};

export type User = {
    email: string;
    password: string;
};

const minPasswordValidator = {
    min: 3,
    message: 'Password must me at least 6 charterers long',
};

const Auth = (props: AuthProps) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const isRegister = () => {
        return props.mode === 'register';
    };

    const registerUser = async (user: User) => {
        setLoading(true);
        try {
            const response = await axios.post(
                'http://localhost:3330/api/auth/register',
                user
            );
            console.log(response.data);
        } catch (error: any) {
            console.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    const onFinish = (values: any) => {
        registerUser(values);
        // setLoading(true);
        // navigate(isRegister() ? '/login' : '/');
    };

    return (
        <div className="auth-container">
            <Form
                name="login"
                layout="vertical"
                onFinish={onFinish}
                className="auth-form"
            >
                {isRegister() && (
                    <Form.Item
                        label="Full Name"
                        name="name"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name',
                            },
                            {
                                min: 3,
                                message:
                                    'Name must me atleast 3 charterers long',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                )}

                <Form.Item
                    label="Email"
                    name="email"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email',
                        },
                        {
                            type: 'email',
                            message: 'Please provide a valid Email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        minPasswordValidator,
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                {isRegister() && (
                    <Form.Item
                        label="Confirm Password"
                        name="confirm"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            minPasswordValidator,
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue('password') === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            'The two passwords that you entered do not match!'
                                        )
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                )}

                <Form.Item>
                    <Button loading={loading} type="primary" htmlType="submit">
                        {isRegister() ? 'Register' : 'Login'}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Auth;