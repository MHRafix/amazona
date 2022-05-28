import { Button, TextField } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookies";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutContainer from "../../components/common/layout/LayoutContainer";
import { setUserInfo } from "../../redux/users_login/action";

export default function login() {
  //  Post api request from front-end using next js
  const router = useRouter();
  const { redirect } = router.query;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.user_info);

  useEffect(() => {
    if (!userInfo === {}) {
      router.push("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/login", {
        email,
        password,
      });
      dispatch(setUserInfo(data));
      Cookies.set("userInfo", data);
      router.push(redirect || "/ ");
      alert("success login");
    } catch (err) {
      alert(err.response.data ? err.response.data.message : err.message);
    }
  };

  return (
    <LayoutContainer title="Login" description="This is login page...!">
      <form onSubmit={handleLogin}>
        {/* <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          placeholder="Enter your name..."
          onChange={(e) => setName(e.target.value)}
        /> */}
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="Enter your email..."
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          hiddenLabel
          type="password"
          id="filled-hidden-label-normal"
          placeholder="Enter your password..."
          variant="filled"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Login
        </Button>
      </form>
    </LayoutContainer>
  );
}
