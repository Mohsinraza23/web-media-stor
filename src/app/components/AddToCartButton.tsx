"use client"
// import Link from 'next/link';
// import { useCart } from "./CartContext"

// type Product = {
//   _id: string
//   name: string
//   price: number
//   imageUrl: string
//   description: string
//   category: string
//   slug: string
// }

// export default function AddToCartButton({ product }: { product: Product }) {
//   const { addToCart } = useCart()

//   return (
//     <Link href="/cart"> {/* Replace '/cart' with your desired path */}
//   <button
//     onClick={() => addToCart(product)} // addToCart function is triggered when the button is clicked
//     className="mt-4 w-full bg-[#ff6b6b] text-white px-6 py-3 rounded-md hover:bg-[#ff4b4b] transition-colors"
//   >
//     Add to Cart
//   </button>
// </Link>
//   )
// }

// "use client"

type Product = {
  _id: string
  name: string
  price: number
  description: string
  slug: string
  imageUrl: string
  category: string
}

export default function AddToCartButton({ product }: { product: Product }) {
  return (
    <button
      className="snipcart-add-item mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
      data-item-id={product._id}
      data-item-price={product.price}
      data-item-url={`/products/${product.slug}`}
      data-item-description={product.description}
      data-item-image={product.imageUrl}
      data-item-name={product.name}
      aria-label={`Add ${product.name} to cart`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline-block"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      Add to Cart
    </button>
  )
}

