import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Page1 = lazy(() => import("./Page1"));
const Page2 = lazy(() => import("./Page2"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route
          path="/page2"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Page2 />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
