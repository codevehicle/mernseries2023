import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("Admin layout", user);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  {" "}
                  <FaUserAlt />
                  users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <IoMdContact />
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <MdOutlineMiscellaneousServices />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
