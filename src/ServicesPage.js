import React, { useRef, useState } from 'react';
import { Carousel, Collapse, Steps } from 'antd';
import { FacebookOutlined, InstagramOutlined, BulbOutlined, AppstoreOutlined, GlobalOutlined, CodeSandboxOutlined, SettingOutlined, MobileOutlined,
  CodeOutlined,CloudServerOutlined,ApiOutlined,EditOutlined} from '@ant-design/icons';
import { SiLine } from 'react-icons/si';
import './page.css';
import './ServicesPage.css';

const ServicesPage = () => {
  const carouselRef = useRef(null); // 用於控制 Carousel 的引用
  const [currentIndex, setCurrentIndex] = useState(0); // 追蹤當前頁面

  const handleButtonClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index); // 切換到指定的 Carousel 頁面
    }
    setCurrentIndex(index); // 更新當前頁面的 index
  };

  const handleAfterChange = (index) => {
    setCurrentIndex(index); // 當 Carousel 滑動後更新 index
  };


  return (
    <div>
      <div className="Title">
        <h1 style={{ fontSize: '40px' }}>服務項目</h1>
        <p>專注於您的需求，提供最專業的技術服務</p>
        <div className='TitlePhoto'>
        </div>
        <div className='container'>
          <div className="ButtonGroup">

            <button
              onClick={() => handleButtonClick(0)}
              className={`custom-button ${currentIndex === 0 ? 'active' : ''}`}
            >
              APP 開發
            </button>
            <button
              onClick={() => handleButtonClick(1)}
              className={`custom-button ${currentIndex === 1 ? 'active' : ''}`}
            >
              WEB 開發
            </button>
            <button
              onClick={() => handleButtonClick(2)}
              className={`custom-button ${currentIndex === 2 ? 'active' : ''}`}
            >
              MCU 韌體設計
            </button>
          </div>
          <div>
            <Carousel
              ref={carouselRef}
              afterChange={handleAfterChange}
              arrows
              infinite={false}
              dots={false} // 禁用底部的指示點
            >
              {/* Carousel 頁面 */}
              <div className="ServiceContent">
                <div className="content">
                  <h1 className="service-title">
                    <div className="icon-circle" style={{ fontSize:'30px'}}>
                      <AppstoreOutlined   style={{ fontSize: '30px', color: '#fff' }}/>
                    </div>
                    APP 開發服務
                  </h1>
                  <div className="hashTag">
                    <div className="hashTagContent">
                      <p>#flutter</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#react native</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#react native</p>
                    </div>
                  </div>
                  <div className='ServiceContentContainer'>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <MobileOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>跨平台支援</span>
                      <ul>
                        <li>iOS 與 Android 原生開發</li>
                        <li>Flutter 框架整合</li>
                        <li>API 與後端介接設計</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <EditOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>UI/UX 設計</span>
                      <ul>
                        <li>使用者介面與體驗優化</li>
                        <li>動態效果與動畫設計</li>
                        <li>多語系支援與本地化</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <SettingOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>功能實現</span>
                      <ul>
                        <li>即時推播通知</li>
                        <li>資料同步與快取優化</li>
                        <li>離線模式與安全機制</li>
                      </ul>
                    </div>
                  </div>

                  <div className='Collapse'>
                    <Collapse
                      items={[{
                        key: '1',
                        label: (
                          <span>
                            <BulbOutlined style={{ marginRight: '8px', fontSize: '24px' }} />
                            開發流程
                          </span>
                        ),
                        children: (
                          <Steps
                            direction="vertical"
                            size="small"
                            current={2} // 這裡設定當前步驟，例如2表示目前執行到第3步
                            items={[
                              { title: '需求分析', status: 'wait' }, // 狀態設為等待
                              { title: 'UI/UX 設計', status: 'process' }, // 狀態設為進行中
                              { title: '開發實作', status: 'wait' },
                              { title: '上線部署', status: 'wait' }
                            ]}
                          />
                        )
                      }]}
                    />
                  </div>

                </div>
              </div>
              <div className="ServiceContent">
                <div className="content">
                  <h1 className="service-title">
                    <div className="icon-circle" style={{ fontSize:'30px'}}>
                      <GlobalOutlined  style={{ fontSize: '30px', color: '#fff' }}/>
                    </div>
                    WEB 開發服務
                  </h1>

                  <div className="hashTag">
                    <div className="hashTagContent">
                      <p>#HTML5</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#react</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#JavaScript</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#Vue.js</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#Css3</p>
                    </div>
                  </div>
                  <div className='ServiceContentContainer'>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <CodeOutlined  style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>前端開發</span>
                      <ul>
                        <li>React 與 Vue 框架應用</li>
                        <li>響應式設計與跨裝置支援</li>
                        <li>資料庫設計與效能優化</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <CloudServerOutlined  style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>部署與維護</span>
                      <ul>
                        <li>Docker 容器化部署</li>
                        <li>CI/CD 自動化流程</li>
                        <li>伺服器安全性與負載測試</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <SettingOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>功能實現</span>
                      <ul>
                        <li>即時推播通知</li>
                        <li>資料同步與快取優化</li>
                        <li>離線模式與安全機制</li>
                      </ul>
                    </div>
                  </div>
                  <div className='Collapse'>
                    <Collapse
                      items={[{
                        key: '1',
                        label: (
                          <span>
                            <BulbOutlined style={{ marginRight: '8px', fontSize: '24px' }} />
                            開發流程
                          </span>
                        ),
                        children: (
                          <Steps
                            direction="vertical"
                            size="small"
                            current={2} // 這裡設定當前步驟，例如2表示目前執行到第3步
                            items={[
                              { title: '需求分析', status: 'wait' }, // 狀態設為等待
                              { title: 'UI/UX 設計', status: 'process' }, // 狀態設為進行中
                              { title: '開發實作', status: 'wait' },
                              { title: '上線部署', status: 'wait' }
                            ]}
                          />
                        )
                      }]}
                    />
                  </div>
                </div>
              </div>
              <div className="ServiceContent">
                <div className="content">
                  <h1 className="service-title" style={{ fontSize:'30px'}}>
                    <div className="icon-circle">
                      <CodeSandboxOutlined style={{ fontSize: '30px', color: '#fff' }} />
                    </div>
                    MCU 韌體設計
                  </h1>
                  <div className="hashTag">
                    <div className="hashTagContent">
                      <p>#ARM</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#AVR</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#PIC</p>
                    </div>
                  </div>
                  <div className='ServiceContentContainer'>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <ApiOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>硬體整合</span>
                      <ul>
                        <li>外部感測器與驅動模組介接</li>
                        <li>CAN BUS 與 I2C 通訊協議應用</li>
                        <li>功耗優化與電池管理</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <CodeOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>韌體開發</span>
                      <ul>
                        <li>FreeRTOS 多執行緒設計</li>
                        <li>Bootloader 與系統升級實現</li>
                        <li>即時處理與中斷機制</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <AppstoreOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>應用實現</span>
                      <ul>
                        <li>即時資料蒐集與分析</li>
                        <li>無線通訊模組整合（Wi-Fi/BLE）</li>
                        <li>嵌入式系統穩定性測試</li>
                      </ul>
                    </div>
                  </div>
                  <div className='Collapse'>
                    <Collapse
                      items={[{
                        key: '1',
                        label: (
                          <span>
                            <BulbOutlined style={{ marginRight: '8px', fontSize: '24px' }} />
                            開發流程
                          </span>
                        ),
                        children: (
                          <Steps
                            direction="vertical"
                            size="small"
                            current={2} // 這裡設定當前步驟，例如2表示目前執行到第3步
                            items={[
                              { title: '需求分析', status: 'wait' }, // 狀態設為等待
                              { title: 'UI/UX 設計', status: 'process' }, // 狀態設為進行中
                              { title: '開發實作', status: 'wait' },
                              { title: '上線部署', status: 'wait' }
                            ]}
                          />
                        )
                      }]}
                    />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <footer className='copyright'>
        <div className='copyright'>
          Copyright © 2025 MakerRabbit Tech 創客兔科技有限公司 著作權所有。All Rights Reserved.
          <div className='social-media'>
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined className="social-icon" />
            </a>
            <a href="https://www.instagram.com/YourPage" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined className="social-icon" />
            </a>
            <a href="https://line.me/YourPage" target="_blank" rel="noopener noreferrer">
              <SiLine className="social-icon" />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;