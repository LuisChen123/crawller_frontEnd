import * as React from 'react';
import './style.css';
import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const NormalLoginForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='login'>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NormalLoginForm;
