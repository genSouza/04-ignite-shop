import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import shirt1 from "../assets/Shirt/Camisa-Maratona 1.png";
import shirt2 from "../assets/Shirt/IgniteLab-T-shirt 1.png";
import shirt3 from "../assets/Shirt/Igniter-abord-2-t-shirt 1.png";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
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

      <Product className="keen-slider__slide">
        <Image
          src={shirt3.src}
          width={shirt3.width}
          height={shirt3.height}
          alt="product"
        />
        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src={shirt3.src}
          width={shirt3.width}
          height={shirt3.height}
          alt="product"
        />
        <footer>
          <strong>Camiseta 4</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      
      <Product className="keen-slider__slide">
        <Image
          src={shirt3.src}
          width={shirt3.width}
          height={shirt3.height}
          alt="product"
        />
        <footer>
          <strong>Camiseta 4</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

    </HomeContainer>
  );
}
