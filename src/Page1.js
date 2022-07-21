import React, { useState, useMemo } from "react";
import MessageError from "./MessageError";

const Page1 = () => {
  const [error, setError] = useState("");
  const [nameInput, setNameInput] = useState("");

  const errorMessage = useMemo(() => <MessageError />, []);

  const handleChange = (e) => {
    setNameInput(e.target.value);
    if (e.target.value.length > 2) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div>
      <h1>Page 1</h1>
      <input type="text" onChange={handleChange} value={nameInput} />
      {error && errorMessage}
    </div>
  );
};

export default Page1;
