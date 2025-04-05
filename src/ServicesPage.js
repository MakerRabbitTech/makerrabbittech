import React, { useRef, useState ,useEffect} from 'react';
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
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

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
                      <p>#Flutter</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#React Native</p>
                    </div>
                  </div>
                  <div className='ServiceContentContainer'>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <MobileOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>跨平台支援</span>
                      <ul>
                        <li>專業支援 iOS 與 Android 雙平台原生開發</li>
                        <li>整合 Flutter 框架實現一次開發、多端部署</li>
                        <li>支援原生模組擴充、裝置相容性測試</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <EditOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>UI / UX 設計</span>
                      <ul>
                        <li>強化操作流程，優化使用者體驗</li>
                        <li>視覺動態設計，提升品牌形象</li>
                        <li>支援多語系與在地化介面，符合品牌視覺與商業目標的設計邏輯</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <SettingOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>功能實現</span>
                      <ul>
                        <li>實作推播通知、深層連結等用戶互動機制</li>
                        <li>支援資料快取與背景同步，提升使用流暢度</li>
                        <li>提供生物辨識、權限控管等進階安全設計</li>
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
                            className="custom-step-item"
                            direction="vertical"
                            size="small"
                            current={0} // 這裡設定當前步驟，例如2表示目前執行到第3步
                            items={[
                              {
                                title: '需求訪談與規劃',
                                description: '釐清商業目標與用戶情境，確認核心功能與開發時程',
                                status: 'wait'
                              },
                              {
                                title: 'UI / UX 設計',
                                description: '設計視覺風格與操作流程，打造良好的使用者體驗',
                                status: 'wait'
                              },
                              {
                                title: '前後端功能開發',
                                description: '串接 API、實作核心功能並整合多平台框架',
                                status: 'wait'
                              },
                              {
                                title: '測試與上架部署',
                                description: '完成測試後發布至 App Store / Google Play 並持續優化',
                                status: 'wait'
                              }
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
                      <p>#React</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#JavaScript</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#Vue.js</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#CSS</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#HTML</p>
                    </div>
                  </div>
                  <div className='ServiceContentContainer'>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <CodeOutlined  style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>前端開發</span>
                      <ul>
                        <li>採用 React 與 Vue 等主流框架打造現代化網頁應用</li>
                        <li>響應式設計，全面支援手機、平板與桌機瀏覽</li>
                        <li>精簡畫面資料流程與效能設計，提升整體操作效率</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <CloudServerOutlined  style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>部署與維護</span>
                      <ul>
                        <li>使用 Docker 進行容器化部署，提升環境一致性與維護效率</li>
                        <li>建立 CI/CD 自動化流程，確保快速穩定地上線更新</li>
                        <li>強化伺服器安全與負載測試，保障系統穩定性與資安</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <SettingOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>功能實現</span>
                      <ul>
                        <li>表單、查詢、報表等互動式功能模組開發</li>
                        <li>權限管理、多角色登入與行為追蹤</li>
                        <li>第三方服務整合（如金流、社群登入、地圖 API 等）</li>
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
                            current={0} // 這裡設定當前步驟，例如2表示目前執行到第3步
                            items={[
                              {
                                title: '需求訪談與規劃',
                                description: '確認網站目標、使用情境與功能架構',
                                status: 'wait'
                              },
                              {
                                title: 'UI / UX 設計',
                                description: '設計響應式版面與互動流程，確保跨裝置一致體驗',
                                status: 'wait'
                              },
                              {
                                title: '前後端開發',
                                description: '實作前端介面與後端邏輯，串接資料庫與 API',
                                status: 'wait'
                              },
                              {
                                title: '測試與部署',
                                description: '進行功能測試、除錯與伺服器部署，確保穩定上線',
                                status: 'wait'
                              }
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
                      <p>#STM32</p>
                    </div>
                    <div className="hashTagContent">
                      <p>#Arduino</p>
                    </div>
                  </div>
                  <div className='ServiceContentContainer'>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <ApiOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>硬體整合</span>
                      <ul>
                        <li>串接多種感測器與驅動模組，滿足多樣化應用需求</li>
                        <li>支援主流通訊介面（I2C、SPI、CAN BUS 等）實現穩定資料交換</li>
                        <li>優化功耗設計，延長電池續航與裝置使用壽命</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <CodeOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>韌體開發</span>
                      <ul>
                        <li>採用有限狀態機或 FreeRTOS 架構，實現多工與即時控制</li>                        
                        <li>支援 Bootloader、OTA 更新與版本管理機制</li>
                        <li>強化中斷處理邏輯，提升系統穩定性與執行效率</li>
                      </ul>
                    </div>
                    <div className="ServiceContentDetails">
                      <div className="iconWrapper">
                        <AppstoreOutlined style={{ fontSize: '24px', color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>應用實現</span>
                      <ul>
                        <li>整合 Wi-Fi、藍牙（BLE）、LoRa 等通訊模組</li>
                        <li>實作資料上傳、遠端控制與即時狀態回報</li>
                        <li>協助嵌入式裝置連結雲端或行動 APP，拓展產品價值</li>
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
                              {
                                title: '需求確認',
                                description: '釐清產品功能、目標硬體平台與開發限制',
                                status: 'wait'
                              },
                              {
                                title: '系統架構設計',
                                description: '規劃感測器、通訊模組與電源管理等整體系統架構',
                                status: 'wait'
                              },
                              {
                                title: '韌體撰寫與測試',
                                description: '開發 MCU 韌體並進行單元測試與除錯',
                                status: 'wait'
                              },
                              {
                                title: '整合驗證與上線',
                                description: '與硬體整合並進行系統驗證與穩定性測試',
                                status: 'wait'
                              }
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
      </footer>
    </div>
  );
};

export default ServicesPage;