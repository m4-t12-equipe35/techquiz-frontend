import { Navigate } from "react-router-dom";
import Homepage from "../../components/Home/home";

function Dashboard() {
  const token = localStorage.getItem("@TOKEN");

  return token ? <Homepage /> : <Navigate to="/" />;
}

export default Dashboard;
