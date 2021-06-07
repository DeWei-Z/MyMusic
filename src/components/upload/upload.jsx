import React, { useState,useRef,useEffect } from 'react';
import {Modal, Form, Upload, Button,Input,Tag,message} from 'antd';
import { UploadOutlined,PlusOutlined } from '@ant-design/icons';
import '../../font/iconfont.css';
import FormItem from 'antd/lib/form/FormItem';
import axios from 'axios';
import memory from '../../memory'




const UploadV=()=>{
    
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [fileList,setFileList]=useState([])
    const [selectedTags,setSelectedTgas]=useState([])
    const { CheckableTag } = Tag;
    const saveInputRef=useRef();
    const [inputValue,setInputValue]=useState('');
    const [inputVisible,setInputVisible]=useState(false)
    const [tagsData,setTagsData] = useState(['电影', '颜值', '音乐', '体育','萌宠','风景']);
    
    const handleUpload = async(values) => {
      
        const formData = new FormData();
        formData.append('file',fileList[0]);
        formData.append('desc',values.description)
        formData.append('tags',selectedTags)
        formData.append('user',memory.user.username)
        
        axios({
          url:'/upload',
          method:"POST",
          data:formData,
          headers:{
            'Content-Type': 'multipart/form-data',
            'X-Requested-With': 'XMLHttpRequest'
          },
          processData:false,
          contentType:false,

        }).then(res => {
            if(res.data.status===1){
              message.error('上传文件失败');
            }else{
              message.success('上传文件成功')
              setFileList([])
              setSelectedTgas([])
              setVisible(false)
            }
          })
          .catch(err => {
              console.log(err)
          })
      };


      const  handleChange=(tag, checked)=>{
      
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTgas(nextSelectedTags);
      }

    const  onCancel=() => {
        setVisible(false);
      }
    
      useEffect(() => {
        if(inputVisible){
          saveInputRef.current.focus()
        }
          
      }, [inputVisible])

      const showInput = () => {
        setInputVisible(true);
      };
    
      const handleInputChange = e => {
        setInputValue(e.target.value);
      };
    
      const handleInputConfirm = () => {
       
        if (inputValue) {
          setTagsData(old=>[...old,inputValue])
        }
        setInputVisible(false)
        setInputValue('')
      };
    
      const handleClose=(removeTag)=>{
        const tags = tagsData.filter(tag => tag !== removeTag);
        setTagsData(tags);
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
        <span className="iconfont" onClick={()=>{
          if(!memory.user.username){
            message.error('请先登录')
            return;
          }
          setVisible(true)} } >&#xe627;</span>
        <Modal
      visible={visible}
      title="Create a new collection"
      okText="确认"
      cancelText="取消"
      onCancel={onCancel}
      width='500px'
      onOk={() => {
       
        form.validateFields()
                .then((values) => {
                    handleUpload(values)
                    form.resetFields();
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
       
        <Form.Item name='description' label="视频描述:">
            <Input.TextArea></Input.TextArea>
        </Form.Item>
        <Form.Item  label="选择视频标签:" >
       
        {tagsData.map((tag,index) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => handleChange(tag, checked)}
            style={{fontSize:'14px'}}
            closable={index >= 5?'true':'false'}
            onClose={() => handleClose(tag)}
          >
            #{tag}
          </CheckableTag>
        ))}
           {inputVisible && (
          <Input
            ref={saveInputRef}
            type="text"
            size="small"
            className="tag-input"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag className="site-tag-plus" onClick={showInput}>
            <PlusOutlined /> New Tag
          </Tag>
        )}
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