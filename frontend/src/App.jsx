import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
