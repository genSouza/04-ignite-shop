import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface HomeProps {
  products: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home(props: HomeProps) {
  console.log("🚀 ~ file: index.tsx:23 ~ Home ~ props", props);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const productList = props.products.map((product) => {
    return (
      <Link href={`/product/${product.id}`} key={product.id}>
        <Product className="keen-slider__slide">
          <Image
            src={product.imageUrl}
            width={520}
            height={520}
            alt="product"
          />
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      </Link>
    );
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {productList}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // hours
  };
};
