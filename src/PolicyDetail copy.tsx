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
     <div className="page-container">
      <h2>保單詳細資訊</h2>

      {/* 基本資訊 */}
      <div className="detail-card">
        <h3>基本資訊</h3>
        <p><strong>保單名稱：</strong>{policy.name || "未提供"}</p>
        <p><strong>保險公司：</strong>{policy.company || "未提供"}</p>
        <p><strong>編號：</strong>{policy.number || "未提供"}</p>
        <p><strong>類型：</strong>{policy.type || "未提供"}</p>
        <p><strong>狀態：</strong>{policy.status || "未提供"}</p>
        <p><strong>投保日期：</strong>{policy.startDate || "未提供"}</p>
        <p><strong>到期日期：</strong>{policy.endDate || "未提供"}</p>
        <p><strong>繳費方式：</strong>{policy.payment || "未提供"}</p>
        <p><strong>保費金額：</strong>{policy.premium || "未提供"}</p>
      </div>

      {/* 保障內容 */}
      <div className="detail-card">
        <h3>保障內容</h3>
        <p><strong>保額：</strong>{policy.coverage || "未提供"}</p>
        <p><strong>保障項目：</strong>{policy.items || "未提供"}</p>
        <p><strong>免責額：</strong>{policy.deductible || "未提供"}</p>
        <p><strong>不保事項：</strong>{policy.exclusions || "未提供"}</p>
      </div>

      {/* 投保人與被保人 */}
      <div className="detail-card">
        <h3>投保人與被保人</h3>
        <p><strong>投保人：</strong>{policy.policyHolder || "未提供"}</p>
        <p><strong>被保人：</strong>{policy.insured || "未提供"}</p>
        <p><strong>生日：</strong>{policy.birthDate || "未提供"}</p>
        <p><strong>關係：</strong>{policy.relationship || "未提供"}</p>
      </div>

      {/* 其他資訊 */}
      <div className="detail-card">
        <h3>其他資訊</h3>
        <p><strong>業務員：</strong>{policy.agent || "未提供"}</p>
        <p><strong>理賠申請方式：</strong>{policy.claimProcess || "未提供"}</p>
        <p><strong>附加條款：</strong>{policy.extraClauses || "未提供"}</p>
        {policy.file && (
          <p><strong>保單文件：</strong>
            <a href={policy.file} target="_blank" rel="noopener noreferrer">下載 PDF</a>
          </p>
        )}
      </div>
      
      {/* 返回按鈕 */}
      <button className="back-btn" onClick={() => navigate(-1)}>返回首頁</button>
    
    </div>
  );
};

export default PolicyDetail;
