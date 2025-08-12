import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ConsignmentPage.css";

const ConsignmentPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    policyName: "",
    policyNumber: "",
    policyType: "",
    expectedIncome: "",
    expectedClaimRatio: "",
    modelTolerance: "",
    riskPreference: "",
    policyFile: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    console.log("表單資料:", formData);
    alert("已送出！");
  };

  return (
    <div className="page-container">
      <h2>託賣保單</h2>

      <div className="form-container">
        <div className="form-group">
          <label>保單名稱：</label>
          <input
            type="text"
            name="policyName"
            value={formData.policyName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>編號：</label>
          <input
            type="text"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>種類：</label>
          <input
            type="text"
            name="policyType"
            value={formData.policyType}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>保單內容：</label>
          <input
            type="file"
            name="policyFile"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>預計收入：</label>
          <input
            type="text"
            name="expectedIncome"
            value={formData.expectedIncome}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>預計理賠比例：</label>
          <input
            type="text"
            name="expectedClaimRatio"
            value={formData.expectedClaimRatio}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>模型容忍度：</label>
          <input
            type="text"
            name="modelTolerance"
            value={formData.modelTolerance}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>風險偏好：</label>
          <input
            type="text"
            name="riskPreference"
            value={formData.riskPreference}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button onClick={() => navigate("/")}>返回首頁</button>
          <button onClick={handleSubmit}>送出</button>
        </div>
      </div>
    </div>
  );
};

export default ConsignmentPage;
