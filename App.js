import React from "react";
import { NativeBaseProvider, Box, Container } from "native-base";
import CustomInput from "./CustomInput";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ResetPassword from "./Components/ResetPassword";
import ForgetPassword from "./Components/ForgetPassword"

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Container>
          <Login />
          {/* Este componente es solo un ejemplo */}
          <SignUp />
          {}
          <ResetPassword />
          {}
          <ForgetPassword />
          {}
        </Container>
      </Box>
    </NativeBaseProvider>
  );
}
