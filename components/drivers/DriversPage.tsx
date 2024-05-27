import React from "react";
import DriversLists from "./DriversLists";
import CreateDriver from "./CreateDriver";

const DriversPage = () => {
  return (
    <>
      <CreateDriver />
      <DriversLists />
    </>
  );
};

export default DriversPage;
