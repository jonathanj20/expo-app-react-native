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
      <Text>Login</Text>
      <Text>Usuario</Text>
      <Input placeholder="username"></Input>
      <Text>Contraseña</Text>
      <Input placeholder="password" type="password"></Input>
      <Button>Login</Button>
      <Link>Forgot Password?</Link>
    </>
  );
};





