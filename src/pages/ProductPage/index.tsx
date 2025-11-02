import { useParams } from "react-router";


export default function ProductPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Product Page</h1>
      <p>This is the product page for product ID: {id}</p>
    </div>
  )
}