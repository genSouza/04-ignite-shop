import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  return (
    <div>
      <h1>Product page {JSON.stringify(query)}</h1>
    </div>
  );
}
