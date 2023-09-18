import {StyleSheet, Text, Image, Input, Button, Link} from "native-base";

export default function Login() {
  return (
    <>
    {/* La imagen puede ser una url o el path de una imagen en la carpeta */}
      <Image
        source={{
          uri: "./imagenes/logo2.png",
        }}
        alt="Alternate Text"
        size="xl"
      />
      <Text>Reset Password</Text>
      <Text>Password</Text>
      <Input placeholder="Type your password" type="password"></Input>
      <Text>New Password</Text>
      <Input placeholder="type your new password" type="password"></Input>
      <Text>Confirm Password</Text>
      <Input placeholder="type your password"></Input>
      <Button>Reset</Button>
    </>
  );
};