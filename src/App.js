import React, { useState, useEffect } from 'react';
import { HomeOutlined, BulbOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import './MenuComponent.css';

import HomePage from './HomePage';
import SolutionsPage from './SolutionsPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';

const MenuContent = () => {
 const location = useLocation();
 const [current, setCurrent] = useState(getKeyFromPath(location.pathname));

 function getKeyFromPath(pathname) {
   switch(pathname) {
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
     label: (<Link to="/" style={{ fontWeight: 'bold' }}>創客兔 MakerRabbit Tech</Link>),
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