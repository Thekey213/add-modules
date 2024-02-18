import React from "react";

export default function Header({name}) {
    return (
      <div>
        <h1 className="text-success">Study App</h1>
        <p className="lead">Welcome {name}</p>
      </div>
    );
  }