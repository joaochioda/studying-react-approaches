import React from "react";
import ListNames from "./ListNames";
import ErrorBoundary from "./ErrorBoundary";

const Page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <ErrorBoundary>
        <ListNames />
      </ErrorBoundary>
    </div>
  );
};

export default Page1;
