import React, { useState, useEffect } from 'react';
import { HomeOutlined, BulbOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { HashRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import './MenuComponent.css';
import { Helmet } from 'react-helmet';
import HomePage from './HomePage';
import SolutionsPage from './SolutionsPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';

const MenuContent = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(getKeyFromPath(location.pathname));

  function getKeyFromPath(pathname) {
    switch (pathname) {
      case '/': return 'main';
      case '/solutions': return 'solutions';
      case '/services': return 'services';
      case '/contact': return 'contact';
      default: return 'main';
    }
  }

  useEffect(() => {
    setCurrent(getKeyFromPath(location.pathname));
  }, [location]);

  const items = [
    {
      label: (
        <div className="flex items-center">
          <img 
            src={require("./images/LogoMRv2_Nobackground.png")}
            alt="MakerRabbit Logo"
            width='64px'
            height='64px'
            style={{ marginRight: '10px' , verticalAlign: 'middle',marginBottom:'5px' }}
          />
          <Link to="/" className="font-bold">
            創客兔 MakerRabbit Tech
          </Link>
        </div>
      ),
      key: 'main1',
      style: { marginRight: 'auto' }
    },
    {
      label: (<Link to="/">首頁</Link>),
      key: 'main',
      icon: <HomeOutlined />,
    },
    {
      label: (<Link to="/solutions">解決方案</Link>),
      key: 'solutions',
      icon: <BulbOutlined />,
    },
    {
      label: (<Link to="/services">服務項目</Link>),
      key: 'services',
      icon: <SettingOutlined />,
    },
    {
      label: (<Link to="/contact">聯絡我們</Link>),
      key: 'contact',
      icon: <AppstoreOutlined />,
    },
  ];

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Helmet>
        <title>創客兔科技 MakerRabbit Tech | APP開發 | WEB開發 | MCU開發 | 數位轉型解決方案</title>
        <meta name="description" content="創客兔科技 MakerRabbit Tech 提供專業的APP開發、網站開發、韌體開發服務，為企業打造客製化數位轉型方案。我們專注於創新技術，協助企業優化營運效率，創造更高商業價值。" />
        <meta name="keywords" content="創客兔科技,MakerRabbit Tech,APP開發,網站開發,韌體開發,軟體開發,數位轉型,MCU開發,物聯網,系統整合,客製化軟體" />
      </Helmet>
      <div className="custom-menu-container">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          theme="dark"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            background: '#161925',
          }}
          className="border-b-0 custom-menu"
        />
      </div>
    </>
  );
};

const MenuComponent = () => {
  return (
    <Router>
      <MenuContent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default MenuComponent;