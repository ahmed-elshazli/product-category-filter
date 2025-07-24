import { useState } from "react";
import { products } from "./components/data";

const StoreIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline-block mr-2 text-blue-500">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
);

function App() {
    const [category, setCategory] = useState("all");

    const categories = ["all", "men", "women", "kids"];

    const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category);

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="container mx-auto px-4 py-16">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                        <StoreIcon />
                        Our Exclusive Products
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Browse our curated collection. Filter by category to find exactly what you're looking for.</p>
                </header>

                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-6 py-2 font-medium rounded-full text-sm tracking-wide
                                        transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                                ${category === cat ? "bg-gray-800 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-200 hover:shadow-sm"}`}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

              
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out group">
                            <div className="relative">
                                <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
                                <div className="absolute top-2 right-2">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Stock: {product.stock}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h2>
                                <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">{product.description}</p>
                                <button className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors group-hover:bg-blue-600">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
