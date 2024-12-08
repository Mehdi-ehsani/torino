"use client";
import NavbarLoginBtn from "../atoms/NavbarLoginBtn";
import { getCookie } from "@/utils/cookie";
import NavbarProfileBtn from "../atoms/NavbarProfileBtn";
import { useState, useEffect } from "react";

const NavbarLoginStatus = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromCookie = getCookie("accessToken");
    setToken(tokenFromCookie);
  }, []);

  return (
    <>
      {!!token ? <NavbarProfileBtn /> : <NavbarLoginBtn />}
    </>
  );
};

export default NavbarLoginStatus;
