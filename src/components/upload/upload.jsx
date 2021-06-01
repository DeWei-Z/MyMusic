import React, { useState } from 'react';
import {Modal, Form, Upload, Button,Input,message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../../font/iconfont.css';
import FormItem from 'antd/lib/form/FormItem';
import reqwest from 'reqwest';



const UploadV=()=>{
    
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [fileList,setFileList]=useState([])
    
    const onFinish=async (values)=>{
             console.log(values);
      }

    const handleUpload = () => {
      
        const formData = new FormData();
       console.log(fileList[0])
        formData.append('file',fileList[0]);
       
        reqwest({
          url: '/upload',
          method: 'post',
          processData: false,
          data: formData,
          success: () => {
            setFileList([])
            message.success('upload successfully.');
          },
          error: () => {
            message.error('upload failed.');
          },
        });
      };

    const  onCancel=() => {
        setVisible(false);
      }

      const props = {
        name:'file',
        onRemove: () => {
          setFileList(() => {
            const newFileList = fileList.slice();
            newFileList.splice(0, 1);
            return newFileList;
          });
        },
        beforeUpload: file => {
          setFileList([file]);
          return false;
        },
        fileList,
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
      width='500px'
      onOk={() => {
        handleUpload()
        form.validateFields()
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
       
        <Form.Item name="description" label="视频描述">
            <Input.TextArea></Input.TextArea>
        </Form.Item>

        <FormItem name='file'  >
          <Upload {...props}>
              <Button icon={<UploadOutlined />} style={{marginLeft:'350px'}} >Upload</Button>
          </Upload>
        </FormItem>
        
      </Form>
    </Modal>
    </>
    )
}

 

export default UploadV;