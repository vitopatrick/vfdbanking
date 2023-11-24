import React from "react";

const BalanceCard = ({ title = "USD balance", amount = "0" }) => {
  return (
    <div className="w-full p-3 rounded shadow-sm">
      {/* Title  and Balance*/}
      <div className="space-y-4">
        <h3 className="font-min capitalize text-neutral-400">{title}</h3>
        <p className="text-2xl font-min">{amount}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
