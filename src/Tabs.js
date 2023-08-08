import React, { useState } from "react";
import EligiForm from "./PersonalFinance";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Personal Finance");

  const tabData = [
    "Personal Finance",
    "Auto Lease",
    "Home Finance",
    "Credit Card",
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white p-4">
      <div className="flex justify-center">
        {tabData.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            } mx-2`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <EligiForm category={activeTab} />
    </div>
  );
};

export default Tabs;
