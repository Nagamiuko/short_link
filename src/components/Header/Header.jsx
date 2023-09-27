import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { IoCaretBack } from "react-icons/io5";
const Header = ({ view, pageHis }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="box-bd-wh">
        <div className="nav-menu">
          {pageHis === 1 ? (
            <div className="item onclick" onClick={() => navigate("/")}>
              <IoCaretBack /> Back
            </div>
          ) : (
            ""
          )}
          {pageHis === 1 ? (
            <div
              className="item onclick"
              onClick={() => navigate("/")}
            > Short Link</div>
          ) : (
            <>
              <div className="item onclick" onClick={() => navigate("/")}>
                Short Link
              </div>
              <div
                className="item onclick"
                onClick={() => navigate("/history")}
              >
                History
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
