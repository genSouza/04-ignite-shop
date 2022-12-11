import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 89,99</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          ab natus consequatur, molestias numquam voluptate architecto
          reiciendis enim voluptatibus temporibus sapiente, modi, autem
          necessitatibus omnis officiis eius est labore quibusdam?
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
