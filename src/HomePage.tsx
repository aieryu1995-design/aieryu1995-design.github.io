import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const policies = [
    { id: "policy1", name: "保單1", number: "AB1234567", type: "醫療險", status: "success", statusText: "已承保" },
    { id: "policy2", name: "保單2", number: "CD7654321", type: "醫療險", status: "pending", statusText: "審核中" },
    { id: "policy3", name: "保單3", number: "EF9988776", type: "醫療險", status: "rejected", statusText: "已婉拒" },
  ];

  return (
    <div className="page-container">
      {/* 頂部導覽列 */}
      <header className="top-bar">
        <div className="welcome">歡迎 OO 保險公司</div>
        <button className="logout-btn">登出</button>
      </header>

      {/* 首頁標題 */}
      <h1 className="main-title">AI模型保單管理系統</h1>

      {/* 主要內容 */}
      <div className="container">
        {/* 左邊區塊 */}
        <div className="left-panel">
          <h2>功能選單</h2>
          {/* <button>託賣保單</button> */}
          <button onClick={() => navigate("/consignment")}>託賣保單</button>
          <button>理賠申請</button>
          <button>其他模型</button>
        </div>

        {/* 右邊區塊 */}
        <div className="right-panel">
          <h2>我的保單</h2>

          {policies.map((p) => (
        <button
          key={p.id}
          className="policy-card"
          onClick={() => navigate(`/policy/${p.id}`)}
        >
          <div>
            <p className="title">{p.name}</p>
            <p className="desc">類型: {p.type}</p>
          </div>
          <span className={`status ${p.status}`}>{p.statusText}</span>
        </button>
      ))}

        </div>
      </div>
    </div>
  );
};

export default HomePage;
