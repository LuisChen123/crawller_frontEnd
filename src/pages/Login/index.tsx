import React, { useState } from 'react';
import './style.css';
import qs from 'qs';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const NormalLoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const onFinish = (values: any) => {
    // console.log(values);
    if (values) {
      Axios.post(
        '/api/login',
        qs.stringify({
          password: values.password,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      ).then((res) => {
        if (res.data?.data) {
          setIsLogin(true);
        } else {
          message.error('login faild');
        }
      });
    }
  };

  return isLogin ? (
    <Redirect to='/' />
  ) : (
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
