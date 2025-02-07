import React from "react";

export const Card = ({ children, className, ...props }) => (
  <div className={`p-4 border rounded ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);
