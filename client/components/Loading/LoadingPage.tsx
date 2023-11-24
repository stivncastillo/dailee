import React from "react";

import { Spinner } from "@nextui-org/react";

const LoadingPage = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen w-full">
      <Spinner />
    </div>
  );
};

export default LoadingPage;
