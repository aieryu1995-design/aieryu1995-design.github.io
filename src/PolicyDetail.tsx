// src/pages/PolicyDetail.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PolicyDetail.css";

const PolicyDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 假資料（之後可改成 API）
  const policyData = {
    policy1: {
      name: "保單1",
      number: "AB1234567",
      type: "醫療險",
      plan: "高端醫療方案",
      model: "BERT 文本感情分類器",
      statusText: "已承保"
    },
    policy2: {
      name: "保單2",
      number: "CD7654321",
      type: "醫療險",
      plan: "標準醫療方案",
      model: "ResNet50 影像分類器",
      statusText: "審核中"
    },
    policy3: {
      name: "保單3",
      number: "EF9988776",
      type: "醫療險",
      plan: "基礎醫療方案",
      model: "LSTM 時序預測器",
      statusText: "已婉拒"
    }
  };

  const policy = policyData[id as keyof typeof policyData];

  if (!policy) {
    return <p>找不到此保單</p>;
  }

  return (
    <div>
      <button className="back-btn" onClick={() => navigate(-1)}>← 返回</button>
      <div className="policy-detail-container">
        <h2>{policy.name}</h2>
        <p>編號：{policy.number}</p>
        <p>類型：{policy.type}</p>
        <p>方案：{policy.plan}</p>
        <p>使用模型：{policy.model}</p>
        <p>狀態：{policy.statusText}</p>
      </div>
    </div>
  );
};

export default PolicyDetail;
