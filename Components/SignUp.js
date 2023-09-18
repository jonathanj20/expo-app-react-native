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
      <Text>SignUp</Text>
      <Text>Name</Text>
      <Input placeholder="Type your username"></Input>
      <Text>Email</Text>
      <Input placeholder="Type your email"></Input>
      <Text>Password</Text>
      <Input placeholder="Type your password" type="password"></Input>
      <Button>SignUp</Button>
      <Text>Or</Text>
      <Link>Login</Link>
    </>
  );
};