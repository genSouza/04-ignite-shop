import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product(props: ProductProps) {
  function handleBuyProduct() {
    console.log(
      "🚀 ~ file: [id].tsx:26 ~ defaultPriceId",
      props.product.defaultPriceId
    );
  }

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading..</p>;
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image
          src={props.product.imageUrl}
          width={520}
          height={480}
          alt="product"
        />
      </ImageContainer>
      <ProductDetails>
        <h1>{props.product.name}</h1>
        <span>{props.product.price}</span>
        <p>{props.product.description}</p>
        <button onClick={handleBuyProduct}>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "prod_MxUKp34NBEg77V" } },
      { params: { id: "prod_MxUJyaRPrlol28" } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount! / 100),
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
