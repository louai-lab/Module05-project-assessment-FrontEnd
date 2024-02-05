import { Route, Routes } from "react-router-dom";
import "./App.css";
import Outlet from "./Outlet/Outlet.js";
import Products from "./Pages/Products/Products.js";
import Login from "./Pages/Login/Login.js";
import Orders from "./Pages/Orders/Orders.js";
import SignUp from "./Pages/Signup/SignUp.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
