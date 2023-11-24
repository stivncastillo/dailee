import React from "react";

type AlertProps = {
  type: "success" | "error" | "warning";
  message: string;
};

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  let alertColor = "";

  switch (type) {
    case "success":
      alertColor = "bg-green-500";
      break;
    case "error":
      alertColor = "bg-red-500";
      break;
    case "warning":
      alertColor = "bg-yellow-500";
      break;
    default:
      alertColor = "bg-gray-500";
      break;
  }

  return (
    <div className={`p-4 rounded-md ${alertColor}`}>
      <p className="text-white text-sm">{message}</p>
    </div>
  );
};

export default Alert;
