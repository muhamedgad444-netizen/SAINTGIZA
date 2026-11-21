import { Link } from 'react-router-dom'

export default function ProductCard({ product, index = 0 }) {
  const isAlt = index % 2 !== 0;

  return (
    <div className="product-card-container">
      <Link to={`/product/${product.id}`} className={`pc-card ${isAlt ? 'alt' : ''} no-underline text-current block w-full`}>
        <div className="pc-details">
          <h1>{product.name}</h1>
          <p>{product.subtitle || 'A luxury streetwear essential. Elevated silhouette and premium materials.'}</p>
          <button type="button" className="pc-btn">
            Buy Now ${product.price}
          </button>
        </div>
        <div className="pc-image">
          {/* Ensure the image overlaps dynamically using absolute positioning from CSS */}
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
      </Link>
    </div>
  )
}
