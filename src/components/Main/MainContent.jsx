// MainContent.js
import React, { useState } from 'react';
import ModuleList from './ModuleList';
import AddModuleForm from './AddModuleForm';

export default function MainContent() {
  const [modules, setModules] = useState([
    { code: 'PROG621', moduleName: 'Programming', credit: 300, hours: 30 },
    { code: 'MATH101', moduleName: 'Mathematics', credit: 250, hours: 20},
    { code: 'ENG200', moduleName: 'English', credit: 200, hours: 22 },
    { code: 'SCI301', moduleName: 'Science', credit: 280, hours: 34},
  ]);

  const handleFormSubmit = (newModuleData) => {
    // Update the modules state with the new module data
    setModules([...modules, newModuleData]);
  };

  return (
    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <ModuleList modules={modules} />
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Add New Module</h4>
        <AddModuleForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}
