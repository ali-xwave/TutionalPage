import React, { useState } from "react";
import Man from "../Images/Man.svg";
import Round from "../Images/Ellipse.svg";
import icon1 from "../Images/Left-icon.svg";
import icon2 from "../Images/Right-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useAosInit from "./UseAosInit";
// import "./SubjectsAndPricingComponent.css"; // Import custom CSS

const SubjectsAndPricingComponent = () => {
  useAosInit();
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState("");
  const [newSubjectLevel, setNewSubjectLevel] = useState("");
  const [showModal, setShowModal] = useState(false);

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
    if (
      newSubject &&
      newSubjectLevel &&
      !selectedSubjects.some((subject) => subject.name === newSubject)
    ) {
      setSelectedSubjects([
        { name: newSubject, level: newSubjectLevel },
        ...selectedSubjects,
      ]);
      setNewSubject(""); // Clear the input field after adding
      setNewSubjectLevel(""); // Clear the input field after adding
      setShowModal(false); // Hide the modal after adding
    }
  };

  return (
    <div className="container-fluid">
      <div className="row row-Padding">
        <div className="col-12 col-md-5 col-lg-5" data-aos="fade-right">
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
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setShowModal(true)}
                style={{ position: "relative", zIndex: 1050 }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="d-flex btns pb-2">
              {selectedSubjects.map((subject, index) => (
                <button key={index}>
                  {subject.name} - {subject.level}{" "}
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

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none", zIndex: 1050 }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content custom-modal">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Subject
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="newSubject">Select Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="newSubject"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="newSubjectLevel">Select Subject Level</label>
                <input
                  type="text"
                  className="form-control"
                  id="newSubjectLevel"
                  value={newSubjectLevel}
                  onChange={(e) => setNewSubjectLevel(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddNewSubject}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsAndPricingComponent;
