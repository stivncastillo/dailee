import React from "react";

import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.log("👻 ~ file: ErrorPage.tsx:6 ~ error:", error);
  return (
    <div>
      <h1>ErrorPage</h1>
      {/* Add your error content here */}
    </div>
  );
};

export default ErrorPage;
