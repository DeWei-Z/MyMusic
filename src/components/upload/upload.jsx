import React, { useState } from 'react';
import {Modal, Form, Upload, Button} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../../font/iconfont.css';
import FormItem from 'antd/lib/form/FormItem';



const UploadV=()=>{

    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);


    const onFinish=async (values)=>{
             console.log(values);
      }

    const  onCancel=() => {
        setVisible(false);
      }

      const props = {
        action: '/upload',
        listType: 'picture',
        previewFile(file) {
          console.log('Your upload file:', file);
          // Your process logic. Here we just mock to the same file
          return fetch('/video/desc', {
            method: 'POST',
            body: file,
          })
            .then(res => res.json())
            .then(({ thumbnail }) => thumbnail);
        },
      };

    return (
        <>
        <span className="iconfont" onClick={()=>{setVisible(true)} } >&#xe627;</span>
        <Modal
      visible={visible}
      title="Create a new collection"
      okText="确认"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onFinish(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
       
        <Form.Item name="description" label="Description">
          <textarea cols={30} rows={4} />
        </Form.Item>

        <FormItem name='file' >
          <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </FormItem>
        
      </Form>
    </Modal>
    </>
    )
}

 

export default UploadV;