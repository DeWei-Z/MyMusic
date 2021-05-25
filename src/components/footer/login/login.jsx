import React from 'react';
import { message } from 'antd';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import './login.css';
import {reqLogin} from '../../../ajax/index'

const Login = () => {
 
  
  const onFinish =async (values) => {

    console.log('values:', values);
    let response=await reqLogin(values.username,values.password)
    if (response.status===0) { // 登陆成功
      
      message.success('登陆成功')
      console.log(response.data)
    }
  }

  return (
    <>
    
    
      <ModalForm
        title="Basic Modal"
        trigger={ <button  className='login-button'>登录</button>}
        submitter={{
          searchConfig: {
            submitText: '确认',
            resetText: '取消',
          },
        }}
        onFinish={onFinish}
      >
        <ProFormText width="md" name="username" label="用户名" placeholder="请输入名称"
        rules={[
          {
            whitespace:false,
            required: true,
            message: '用户名不能为空',
          },
          {
              max:12,
              message:"用户名不能大于12位"
          },
          {
              min:4,
              message:'用户名不能小于4位'
          },
          {
              pattern:/^[a-zA-Z0-9]+$/,
              message:'用户名必须是字母、数字或下划线'
          }
        ]}/>

        <ProFormText width="md" name="password" label="密码" placeholder="请输入密码" />
      </ModalForm>
    
    </>
  );
};


export default Login;

