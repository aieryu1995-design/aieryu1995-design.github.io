import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* 頂部導覽列 */}
      <header className="top-bar">
        <div className="welcome">歡迎 OO 保險公司</div>
        <button className="logout-btn">登出</button>
      </header>
      
      {/* 主要內容 */}
      <div className="container">
        {/* 左邊區塊 */}
        <div className="left-panel">
          <h2>功能選單</h2>
          {/* <button>託賣保單</button> */}
          <button onClick={() => navigate("/consignment")}>託賣保單</button>
          <button>理賠申請</button>
          <button>理賠紀錄</button>
          <button>其他模型</button>
        </div>

        {/* 右邊區塊 */}
        <div className="right-panel">
          <h2>我的保單</h2>

          <div className="policy">
            <div>
              <p className="title">保單1</p>
              <p className="desc">編號：AB1234567</p>
              <p className="desc">種類：醫療險</p>
            </div>
            <span className="status success">待審核</span>
          </div>

          <div className="policy">
            <div>
              <p className="title">保單2</p>
              <p className="desc">編號：CD7654321</p>
              <p className="desc">種類：醫療險</p>
            </div>
            <span className="status pending">已拒絕</span>
          </div>

          <div className="policy">
            <div>
              <p className="title">保單3</p>
              <p className="desc">編號：EF9988776</p>
              <p className="desc">種類：醫療險</p>
            </div>
            <span className="status rejected">已售出</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
