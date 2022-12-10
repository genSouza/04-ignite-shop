import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/Shirt/Camisa-Maratona 1.png";
import shirt2 from "../assets/Shirt/IgniteLab-T-shirt 1.png";
import shirt3 from "../assets/Shirt/Igniter-abord-2-t-shirt 1.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image
          src={shirt1.src}
          width={shirt1.width}
          height={shirt1.height}
          alt="product"
        />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image
          src={shirt2.src}
          width={shirt2.width}
          height={shirt2.height}
          alt="product"
        />
        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
