"use client";
import { fetchTransfers } from "@/utils/api";
import React, { useEffect, useState } from "react";
import Transfer from "./Transfer";

const TransferList = () => {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const fetchTransferData = async () => {
      const data = await fetchTransfers();
      if (data) {
        setTransfers(data);
      }
    };

    fetchTransferData();
  }, []);

  return (
    <div className="flex flex-wrap gap-2 m-auto">
      {transfers.map((transfer: any) => {
        return <Transfer key={transfer.id} transfer={transfer} />;
      })}
    </div>
  );
};

export default TransferList;
