import type { AppProps } from "next/app";
import Image from "next/image";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/Logo.svg";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image
          src={logoImg.src}
          width={logoImg.width}
          height={logoImg.height}
          alt="logo"
        ></Image>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
