import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.info("Logged out successfully");
  };
  return (
    <div className="header">
      <div className="vi-flex-container">
        <div style={{ flexGrow: "20" }}>
          <h2>Real Time Chat Application</h2>
        </div>
        <div style={{ flexGrow: "0.5" }}>
          <button type="button" onClick={logout} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
