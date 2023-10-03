import "./category.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card";
import Searchbar from "../../components/searchbar/searchbar";

const Category = () => {
    const { category } = useParams();
    const { categories, data } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        // Check if categories and data are both loaded
        if (categories.length > 0 && data.length > 0) {
            // Find the category object based on the category name
            const selectedCategory = categories.find(cat => cat.title.toLowerCase() === category.toLowerCase());

            if (selectedCategory) {
                const selectedCategoryId = selectedCategory.id;

                // Find the items associated with the selected category
                const categoryItems = data.find(item => item.title.toLowerCase() === selectedCategory.title.toLowerCase())?.items || [];

                // Set products based on the category items
                searchField === ""
                    ? setProducts(categoryItems)
                    : setProducts(
                        categoryItems.filter((product) =>
                            product.name.toLowerCase().includes(searchField.toLowerCase())
                        )
                    );
            }
        }
    }, [searchField, category, categories, data]);



    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="category-container">
            <h2 className="category-title">{category.toUpperCase()}</h2>

            <Searchbar
                className="category-searchbar"
                placeholder={`Search ${category}`}
                searchChangeHandler={onSearchChange}
            />

            <div className="category">
                {products &&
                    products.map((product) => {
                        return <ProductCard key={product.id} product={product} />;
                    })}
            </div>
        </div>
    );
};

export default Category;
