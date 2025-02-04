import React, { useState, useEffect } from 'react';
import { Divider, Button, Form, Input, Select, Space } from 'antd';
import { CheckOutlined, SettingOutlined, RiseOutlined } from '@ant-design/icons';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { SiLine } from 'react-icons/si';
import './page.css'
import './ContactPage.css'
import { message } from 'antd';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const ContactPage = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        break;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        break;
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
    }
  };
  // 將原本的 onFinish 函數替換成這個:
  const onFinish = (values) => {
    // Google Form 的提交 URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeLQga6-JBIB4z8sAl7yuRRnzmDiqRkbiKVQshx4JB-hWFSbw/formResponse';

    // 創建表單數據
    const formData = new URLSearchParams({
      'entry.678500724': values.name,    // 姓名
      'entry.627332193': values.email,   // 電子郵件
      'entry.1122549379': values.phone,  // 電話
      'entry.331295550': values.service  // 服務內容
    });

    // 發送表單數據到 Google Form
    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors', // 必要,因為 Google Forms 不支援 CORS
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })
      .then(() => {
        message.success('表單提交成功！');
        form.resetFields();
      })
      .catch((error) => {
        message.error('提交失敗，請稍後再試');
        console.error('Error:', error);
      });
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div className='Contact'>
        <h1>聯絡我們</h1>
        <p>我們的團隊將竭誠為您服務，打造最適合您的解決方案</p>
      </div>
      <div className='ContactPhoto'></div>
      <div className='Divider'>
        <Divider plain>承諾保證</Divider>
      </div>
      <div className='promise'>
        <div className='promiseContent'>
          <div className='iconCircle'>
            <CheckOutlined />
          </div>
          <h2>客戶至上</h2>
          <p>以您的需求為導向，提供量身訂做的解決方案</p>
        </div>
        <div className='promiseContent'>
          <div className='iconCircle'>
            <SettingOutlined />
          </div>
          <h2>專業品質</h2>
          <p>堅持高品質的服務標準，確保每個項目的成功</p>
        </div>
        <div className='promiseContent'>
          <div className='iconCircle'>
            <RiseOutlined />
          </div>
          <h2>持續成長</h2>
          <p>與客戶共同學習成長，追求技術與服務的持續進步</p>
        </div>
      </div>
      <div className='form' id="consultation-form">
        <h2>立即預約諮詢</h2>
        <Form
          {...layout}
          form={form}
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: '請輸入姓名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="電子郵件"
            rules={[
              { required: true, message: '請輸入電子郵件' },
              { type: 'email', message: '請輸入有效的電子郵件' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="電話"
            rules={[{ required: true, message: '請輸入電話' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="service"
            label="服務內容"
            rules={[{ required: true, message: '請選擇服務內容' }]}
          >
            <Select placeholder="請選擇服務內容">
              <Option value="app">APP</Option>
              <Option value="web">WEB</Option>
              <Option value="mcu">MCU</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit" className='button'>
                送出
              </Button>
              <Button htmlType="button" onClick={onReset} className='button'>
                重設
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
      <div className='contactDetail'>
        <h2 style={{ color: '#CA6702' }}>聯絡資訊</h2>
        <p>電話 : 09123456789 </p>
        <p>Email : makerrabbit.tech@gmail.com</p>
        <h2 style={{ color: '#CA6702' }}>營業時間</h2>
        <p>週一至週五：09:00 - 18:00</p>
        <p>週六、週日：休息</p>
        <h2 style={{ color: '#CA6702' }}>社群媒體</h2>
        <div className='social-media'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined className="social-icon" />
          </a>
          <a href="https://line.me" target="_blank" rel="noopener noreferrer">
            <SiLine className="social-icon" />
          </a>
        </div>
      </div>
      <footer className='copyright'>
        <div className='copyright'>
          Copyright © 2025 MakerRabbit Tech 創客兔科技有限公司 著作權所有。All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;