import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./PolicyDetail.css";

const PolicyDetail = () => {
  const { id } = useParams();
//   const location = useLocation();
  const navigate = useNavigate();
//   const policy = location.state;

  // 假資料，實務上可以從 API 或全域狀態抓
  const policies = {
    policy1: { name: "保單1", number: "AB1234567", type: "醫療險", description: "這是一份醫療險保單，適用於個人醫療保障需求。" },
    policy2: { name: "保單2", number: "CD7654321", type: "醫療險", description: "此保單提供住院與手術費用理賠。" },
    policy3: { name: "保單3", number: "EF9988776", type: "醫療險", description: "已售出，保障內容已轉移至新投保人。" },
  };

  const policy = policies[id];

  if (!policy) return <div>找不到保單</div>;

  return (
    <div className="policy-detail">
      {/* 基本資訊 */}
      <div className="card">
        <div className="card-title">基本資訊</div>
        <div className="card-divider"></div>
        <div className="card-content">
          <p>保單名稱：{policy.name}</p>
          <p>保單編號：{policy.number}</p>
          <p>保單類型：醫療險</p>
          <p>生效日期：2025-01-01</p>
          <p>到期日期：2026-01-01</p>
        </div>
      </div>

      {/* 保障內容 */}
      <div className="card">
        <div className="card-title">保障內容</div>
        <div className="card-divider"></div>
        <div className="card-content">
          <p>住院日額：NT$ 2,000</p>
          <p>手術費用：最高 NT$ 100,000</p>
          <p>意外保障：NT$ 1,000,000</p>
        </div>
      </div>

      {/* 投保人與被保人 */}
      <div className="card">
        <div className="card-title">投保人與被保人</div>
        <div className="card-divider"></div>
        <div className="card-content">
          <p>投保人：王小明</p>
          <p>被保人：王小明</p>
          <p>與投保人關係：本人</p>
        </div>
      </div>

      {/* 其他資訊 */}
      <div className="card">
        <div className="card-title">其他資訊</div>
        <div className="card-divider"></div>
        <div className="card-content">
          <p>付款方式：信用卡</p>
          <p>繳費頻率：年繳</p>
          <p>保單狀態：有效</p>
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>返回首頁</button>
    </div>
    
  );
};

export default PolicyDetail;
