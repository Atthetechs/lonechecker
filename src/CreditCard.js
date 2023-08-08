import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import { Alert, Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { validationSchema } from "./components/formData";
import { Link } from "react-router-dom";

const CreditCard = () => {
  const [eligibleBanks, setEligibleBanks] = useState([]);
  const [eligibalBank, setEligibaleBank] = useState();

  const getRecommendedBanks = (values) => {
    if (
      (values.monthlySalary === "10,000 to 15,000" &&
        values.jobDesignation === "Manager") ||
      ("Officer" &&
        values.country === "Saudi" &&
        values.cityOfResidence === "Riyadh" &&
        values.cityOfWork === "Riyadh")
    ) {
      setEligibaleBank("Riyad Bank click here for apply now.");
    } else if (
      values.monthlySalary === "15,000 to 20,000" &&
      values.cityOfWork === "Jeddah" &&
      values.country === "Saudi" &&
      values.cityOfResidence === "Jeddah"
    ) {
      setEligibaleBank("Arab national Bank click here for apply now.");
    } else if (
      values.monthlySalary === "20,000 to 25,000" &&
      values.cityOfWork === "Makkah" &&
      values.country === "Saudi" &&
      values.cityOfResidence === "Makkah"
    ) {
      setEligibaleBank("Saudi National Bank click here for apply now.");
    } else {
      setEligibaleBank("your not eligibale for any Bank");
    }
  };

  const formik = useFormik({
    initialValues: {
      age: "",
      maritalStatus: "",
      loanDuration: "",
      monthlySalary: "",
      cityOfWork: "",
      cityOfResidence: "",
      jobDesignation: "",
      nationalityID: "",
      country: "",
      expectedFinanceAmount: "",
      checked: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      getRecommendedBanks(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <h1 className="text-2xl font-bold mb-4 mt-4 text-center">
          Credit Card Loan Eligibility Checker
        </h1>
        <Grid spacing={2} container>
          <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <label className="block mb-2">
              Age:
              <input
                type="number"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full border rounded-md px-2 py-1 mt-1"
              />
              {formik.touched.age && formik.errors.age ? (
                <div className="text-red-500">{formik.errors.age}</div>
              ) : null}
            </label>
          </Grid>

          <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <label className="block mb-2 space-y-4">
              Marital Status:
              <select
                name="maritalStatus"
                value={formik.values.maritalStatus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full border rounded-md px-2 py-1 mt-1"
              >
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
              {formik.touched.maritalStatus && formik.errors.maritalStatus ? (
                <div className="text-red-500 mt-[0px]">
                  {formik.errors.maritalStatus}
                </div>
              ) : null}
            </label>
          </Grid>
          <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <label className="block mb-2 space-y-4">
              Expected Finance Amount:
              <input
                type="text"
                maxLength={10}
                name="expectedFinanceAmount"
                value={formik.values.expectedFinanceAmount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full border rounded-md px-2 py-1 mt-1"
              />
              {formik.touched.expectedFinanceAmount &&
              formik.errors.expectedFinanceAmount ? (
                <div className="text-red-500">
                  {formik.errors.expectedFinanceAmount}
                </div>
              ) : null}
            </label>
          </Grid>

          <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <label className="block mb-2 space-y-4">
              Loan Duration:
              <select
                name="loanDuration"
                value={formik.values.loanDuration}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full border rounded-md px-2 py-1 mt-1"
              >
                <option value="">Select</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
              </select>
              {formik.touched.loanDuration && formik.errors.loanDuration ? (
                <div className="text-red-500">{formik.errors.loanDuration}</div>
              ) : null}
            </label>
          </Grid>

          <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <label className="block mb-2 space-y-4">
              Monthly Salary:
              <select
                name="monthlySalary"
                value={formik.values.monthlySalary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full border rounded-md px-2 py-1 mt-1"
              >
                <option value="">Select</option>
                <option value="10,000 to 15,000">10,000 to 15,000</option>
                <option value="15,000 to 20,000">15,000 to 20,000</option>
                <option value="20,000 to 25,000">20,000 to 25,000</option>
              </select>
              {formik.touched.monthlySalary && formik.errors.monthlySalary ? (
                <div className="text-red-500">
                  {formik.errors.monthlySalary}
                </div>
              ) : null}
            </label>
          </Grid>

          <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <label className="block mb-2 space-y-4">
              City Of Work:
              <select
                name="cityOfWork"
                value={formik.values.cityOfWork}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full border rounded-md px-2 py-1 mt-1"
              >
                <option value="">Select</option>
                <option value="Jeddah">Jeddah</option>
                <option value="Riyadh">Riyadh</option>
                <option value="Makkah"> Makkah</option>
                <option value="Medina">Medina</option>
              </select>
              {formik.touched.cityOfWork && formik.errors.cityOfWork ? (
                <div className="text-red-500">{formik.errors.cityOfWork}</div>
              ) : null}
            </label>
          </Grid>

          <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <label className="block mb-2 space-y-4">
              City Of Residence:
              <select
                name="cityOfResidence"
                value={formik.values.cityOfResidence}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full border rounded-md px-2 py-1 mt-1"
              >
                <option value="">Select</option>
                <option value="Jeddah">Jeddah</option>
                <option value="Riyadh">Riyadh</option>
                <option value="Makkah"> Makkah</option>
                <option value="Medina">Medina</option>
              </select>
              {formik.touched.cityOfResidence &&
              formik.errors.cityOfResidence ? (
                <div className="text-red-500">
                  {formik.errors.cityOfResidence}
                </div>
              ) : null}
            </label>
          </Grid>
          <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <label className="block mb-2 space-y-4">
              Job Designation:
              <select
                name="jobDesignation"
                value={formik.values.jobDesignation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full border rounded-md px-2 py-1 mt-1"
              >
                <option value="">Select</option>
                <option value="10,000 to 15,000">CEO</option>
                <option value="15,000 to 20,000">Manger</option>
                <option value="60000">Officer</option>
              </select>
              {formik.touched.jobDesignation && formik.errors.jobDesignation ? (
                <div className="text-red-500">
                  {formik.errors.jobDesignation}
                </div>
              ) : null}
            </label>
          </Grid>

          <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <label className="block mb-2 space-y-4">
              Nationality ID or Iqama:
              <input
                type="text"
                maxLength={10}
                name="nationalityID"
                value={formik.values.nationalityID}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full border rounded-md px-2 py-1 mt-1"
              />
              {formik.touched.nationalityID && formik.errors.nationalityID ? (
                <div className="text-red-500">
                  {formik.errors.nationalityID}
                </div>
              ) : null}
            </label>
          </Grid>

          <Grid item xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <label className="block mb-2 space-y-4">
              Country:
              <select
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full border rounded-md px-2 py-1 mt-1"
              >
                <option value="">Select</option>
                <option value="Saudi">Saudi</option>
                <option value="Expat">Expat</option>
              </select>
              {formik.touched.country && formik.errors.country ? (
                <div className="text-red-500">{formik.errors.country}</div>
              ) : null}
            </label>
          </Grid>
          <Grid item xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <label className="block mb-2 space-y-4">
              <input
                type="checkbox"
                id="acceptTerms"
                name="checked"
                checked={formik.values.checked}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mr-2"
              />
              I Authorize the company to check my SIMAH report in pursual of
              this financing application.
            </label>
            {formik.touched.checked && formik.errors.checked ? (
              <div className="text-red-500">{formik.errors.checked}</div>
            ) : null}
          </Grid>
        </Grid>
        {/* Add similar input fields for other parameters */}
        <Box className="flex justify-center">
          <button
            type="submit"
            className="bg-[#76b740] text-white px-4 py-2 rounded mt-4 hover:bg-[#76b740]"
          >
            Check Eligibility
          </button>
        </Box>

        <Box sx={{ p: "20px" }}>
          {eligibalBank === "your not eligibale for any Bank" ? (
            <Alert severity="error">your not eligibale for any Bank</Alert>
          ) : eligibalBank ? (
            <Alert severity="success">
              You are eligible for The <space />
              <a
                href={
                  eligibalBank === "Riyad Bank"
                    ? "https://www.riyadbank.com/personal-banking/credit-cards"
                    : eligibalBank === "Arab national Bank"
                    ? "https://anb.com.sa/web/anb/credit-cards"
                    : "https://www.alahli.com/en-us/personal-banking/credit-cards/pages/default.aspx"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-1xl font-bold mb-4 mt-4 text-center "
              >
                {eligibalBank}
              </a>
            </Alert>
          ) : null}
        </Box>
      </div>
    </form>
  );
};

export default CreditCard;
