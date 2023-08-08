import React from "react";
import "./App.css";
import Tabs from "./Tabs";
import GlobalTabs from "./components/globalTabs";
import LoanForm from "./LoanForm";
import { Box, Card, Grid } from "@mui/material";
import EligiForm from "./PersonalFinance";
import HomeFinance from "./HomeFinance";
import AutoLease from "./AutoLease";
import CreditCard from "./CreditCard";
import PersonalFinance from "./PersonalFinance";

const tabs = [
  {
    label: "Personal Finance",
    content: <PersonalFinance/>,
  },
  {
    label: "Auto Lease",
    content: <AutoLease/>,
  },
  {
    label: "Home Finance",
    content: <HomeFinance/>,
  },
  {
    label: "Credit Card",
    content: <CreditCard/>,
  },
];

function App() {
  return (
    <Box sx={{pt: "20px"}} className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Card className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[60%] " >
        <GlobalTabs tabs={tabs} />
      </Card>
    </Box>
  );
}

export default App;
