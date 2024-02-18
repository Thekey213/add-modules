import React, { useState } from 'react';

export default function AddModuleForm(props) {
  const [moduleData, setModuleData] = useState({
    code: '',
    moduleName: '',
    credit: 0,
    hours: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModuleData({
      ...moduleData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new module data to the parent component
    props.onSubmit(moduleData);
    // Reset form fields after submission
    setModuleData({
      code: '',
      moduleName: '',
      credit: 0,
      hours: 0
    });
  };

  return (
    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="code" className="form-label">Module Code</label>
          <input
            type="text"
            className="form-control"
            id="code"
            name="code"
            placeholder="Enter module code"
            value={moduleData.code}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Valid Code is required.</div>
        </div>
        <div className="col-sm-6">
          <label htmlFor="moduleName" className="form-label">Module Name</label>
          <input
            type="text"
            className="form-control"
            id="moduleName"
            name="moduleName"
            placeholder="Enter module name"
            value={moduleData.moduleName}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Valid Module name is required.</div>
        </div>
        <div className="col-12">
          <label htmlFor="credit" className="form-label">Credit</label>
          <input
            type="text"
            className="form-control"
            id="credit"
            name="credit"
            placeholder="Enter credit"
            value={moduleData.credit}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Valid Credit score is required.</div>
        </div>
        <div className="col-12">
          <label htmlFor="hours" className="form-label">Hours</label>
          <input
            type="text"
            className="form-control"
            id="hours"
            name="hours"
            placeholder="Enter hours"
            value={moduleData.hours}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Valid Hours is required.</div>
        </div>
        <hr className="my-4" />
        <button className="w-100 btn btn-success btn-lg" type="submit">Submit</button>
      </div>
    </form>
  );
}
