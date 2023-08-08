import { Grid } from "@mui/material";
import React, { useState } from "react";

const LoanForm = ({ category }) => {
  const [age, setAge] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [cityOfWork, setCityOfWork] = useState("");
  const [cityOfResidence, setCityOfResidence] = useState("");
  const [jobDesignation, setJobDesignation] = useState("");
  const [nationalityID, setNationalityID] = useState("");
  const [country, setCountry] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [eligibleBanks, setEligibleBanks] = useState([]);

  const checkEligibility = () => {
    // Implement your eligibility logic here based on user inputs
    // For now, let's assume the user is eligible if they meet any criteria
    const isEligible = true;
    return isEligible;
  };

  const getRecommendedBanks = () => {
    // Implement your bank recommendation logic based on user inputs and eligibility
    const banks = [];

    if (checkEligibility()) {
      if (category === "Personal Finance") {
        banks.push("Riyad Bank");
      } else if (category === "Auto Lease") {
        banks.push("Al Rajhi");
      } else if (category === "Home Finance") {
        banks.push("Bank Alinma");
      } else if (category === "Credit Card") {
        banks.push("Arab National Bank");
      }
    }

    setEligibleBanks(banks);
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">
        {category} Loan Eligibility Checker
      </h2>
      <Grid container>
        <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
          <label className="block my-2">
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border rounded-md px-2 py-1 mt-1 w-full"
            />
          </label>
        </Grid>

        <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
          <label className="block my-2">
            Marital Status:
            <select
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="border rounded-md px-2 py-1 mt-1 w-full"
            >
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </label>
        </Grid>
      </Grid>

      {/* Add similar input fields for other parameters */}
      <button
        onClick={getRecommendedBanks}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
      >
        Check Eligibility
      </button>
      {eligibleBanks.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Recommended Banks:</h2>
          <ul className="list-disc list-inside">
            {eligibleBanks.map((bank, index) => (
              <li key={index} className="mt-2">
                {bank}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoanForm;
