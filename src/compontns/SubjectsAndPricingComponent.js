import React, { useState } from "react";
import Man from "../Images/Man.svg";
import Round from "../Images/Ellipse.svg";
import icon1 from "../Images/Left-icon.svg";
import icon2 from "../Images/Right-icon.svg";

const SubjectsAndPricingComponent = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const subjects = [
    "Physics - O Levels",
    "Chemistry - O Levels",
    "Biology - O Levels",
    "Mathematics - O Levels",
    "Computer Science - O Levels",
  ];

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue && !selectedSubjects.includes(selectedValue)) {
      setSelectedSubjects([selectedValue, ...selectedSubjects]);
    }
  };

  const removeSubject = (subject) => {
    setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
  };

  const [hours, setHours] = useState(""); // Default value

  const handleChange = (event) => {
    setHours(event.target.value);
  };

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "INR", symbol: "₹", name: "Indian Rupee" },
    { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
    { code: "AED", symbol: "د.إ", name: "AED" }, // Added AED currency
  ];

  const [rate, setRate] = useState(""); // Default hourly rate
  const [currency, setCurrency] = useState("AED"); // Default currency

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const currentCurrency = currencies.find((c) => c.code === currency);

  return (
    <div className="container-fluid">
      <div className="row row-Padding">
        <div className="col-12 col-md-5 col-lg-5">
          <img src={Man} alt="People" className="img-fluid" />
        </div>
        <div className="col-12 col-md-7 col-lg-7 position-relative">
          <div>
            <h4>Subjects & Pricing</h4>
            <p>Lorem ipsum dolor sit amet consectetur. Amet.</p>
          </div>
          <div className="column-bg rounded p-3">
            <h5>Select Subjects</h5>
            <div className="d-flex btns pb-2">
              <button>
                English - O Levels <span>x</span>
              </button>
              <button>
                Arabic - O Levels <span>x</span>
              </button>
              <button>
                Urdu - O Levels <span>x</span>
              </button>
            </div>
            <div className="mb-1">
              {selectedSubjects.map((subject, index) => (
                <div
                  key={index}
                  className="subject-btn d-inline-flex align-items-center mx-1 mb-2 p-2 rounded"
                >
                  <span className="mx-1 text-white">{subject}</span>
                  <button
                    type="button"
                    className="text-white border-0 subject-btn"
                    onClick={() => removeSubject(subject)}
                  >
                    <span>&times;</span>
                  </button>
                </div>
              ))}
            </div>
            <h5>Select Curriculum</h5>
            <div className="form-group select-container">
              <select className="form-control" onChange={handleSelectChange}>
                <option value=""></option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <i className="fa fa-chevron-down"></i>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 pt-2">
                <h5>Hours / week</h5>
                <input
                  type="number"
                  value={hours}
                  onChange={handleChange}
                  min="0"
                  placeholder="Mention Hours"
                  className="border-0 rounded p-2"
                />
              </div>
              <div className="col-12 col-md-8 col-lg-8 pt-2">
                <div>
                  <h5 className="text-left">Hourly Rate</h5>
                  <div className="row">
                    <div className="col-auto">
                      <select
                        id="currency"
                        value={currency}
                        onChange={handleCurrencyChange}
                        className="form-select"
                      >
                        {currencies.map((c, index) => (
                          <option key={index} value={c.code}>
                            {c.name} ({c.symbol})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-auto">
                      <input
                        type="number"
                        id="rate"
                        value={rate}
                        onChange={handleRateChange}
                        min="0"
                        step="0.01"
                        placeholder="Mention Rates"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {rate && currentCurrency && (
                    <p className="mt-3">
                      {currentCurrency.symbol}
                      {rate} per hour
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-4 d-flex justify-content-between">
              <div>
                <span>
                  <img src={icon1} alt="icon" />
                </span>
                <span className="fw-bold ps-3">Back</span>
              </div>
              <div>
                <span className="fw-bold px-3">Finish</span>
                <span>
                  <img src={icon2} alt="icon" />
                </span>
              </div>
            </div>
          </div>
          <div className="Ellipse-style">
            <img src={Round} alt="People" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsAndPricingComponent;
