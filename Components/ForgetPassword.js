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
      <Text>Forgot Password</Text>
      <Text>Email</Text>
      <Input type="email" placeholder="type your email"></Input>
      <Button>Send</Button>
      <Link>Login</Link>
    </>
  );
};