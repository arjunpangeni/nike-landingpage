import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProduct = () => {
  return (
    <section className="max-container max-sm:mt-12" id="products">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our
          <span className="text-coral-red"> popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-lg leading-8 sm:max-w-sm">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value .
          {/* font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm */}
        </p>
      </div>
      <div
        className="mt-15 grid lg:grid-cols-4 md:grid-cols-3 
      sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
