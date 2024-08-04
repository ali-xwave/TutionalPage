import React, { useState } from "react";
import Man from "../Images/Man.svg";
import Round from "../Images/Ellipse.svg";
import icon1 from "../Images/Left-icon.svg";
import icon2 from "../Images/Right-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SubjectsAndPricingComponent = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState("");
  const [showInput, setShowInput] = useState(false);

  const removeSubject = (subject) => {
    setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
  };

  const [hours, setHours] = useState("");

  const handleChange = (event) => {
    setHours(event.target.value);
  };

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "INR", symbol: "₹", name: "Indian Rupee" },
    { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
    { code: "AED", symbol: "د.إ", name: "AED" },
  ];

  const [rate, setRate] = useState("");
  const [currency, setCurrency] = useState("AED");

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleAddNewSubject = () => {
    if (newSubject && !selectedSubjects.includes(newSubject)) {
      setSelectedSubjects([newSubject, ...selectedSubjects]);
      setNewSubject(""); // Clear the input field after adding
      setShowInput(false); // Hide the input field after adding
    }
  };

  return (
    <div className="container-fluid">
      <div className="row row-Padding">
        <div className="col-12 col-md-5 col-lg-5" data-aos="zoom-in-right">
          <img src={Man} alt="People" className="img-fluid" />
        </div>
        <div
          className="col-12 col-md-7 col-lg-7 position-relative"
          data-aos="fade-left"
        >
          <h4>Subjects & Pricing</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Amet.</p>
          <div className="column-bg rounded p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Select Subjects</h5>
              <div>
                {showInput ? (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter new subject"
                      value={newSubject}
                      onChange={(e) => setNewSubject(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={handleAddNewSubject}
                    >
                      Add
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowInput(true)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                )}
              </div>
            </div>
            <div className="d-flex btns pb-2">
              {selectedSubjects.map((subject, index) => (
                <button key={index}>
                  {subject}{" "}
                  <span onClick={() => removeSubject(subject)}>x</span>
                </button>
              ))}
            </div>
            <h5>Select Curriculum</h5>
            <div className="form-group select-container">
              <select className="form-control"></select>
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
