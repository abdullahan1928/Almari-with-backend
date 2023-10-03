import "./categories-preview.scss";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";
import { ReactComponent as CrownLogo } from "../../assets/crown-logo.svg";

const CategoriesPreview = () => {
    const { data } = useContext(CategoriesContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setIsLoading(false);
        }
    }, [data]);

    return (
        <div className="categories-preview-container">
            <h2 className="categories-preview-header-title">
                <CrownLogo /> CLOTHING IS HERE FOR KINGS & QUEENS
            </h2>
            {isLoading ? (
                <p>Loading categories...</p>
            ) : (
                Object.keys(data).map((id) => {
                    const title = data[id].title;
                    const products = data[id].items;
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    );
                })
            )}
        </div>
    );
};

export default CategoriesPreview;
