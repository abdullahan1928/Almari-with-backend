import './home.scss'
import Categories from "../../components/categories/categories";
import { ReactComponent as CrownLogo } from '../../assets/crown-logo.svg';
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../context/categories.context';

const Home = () => {
    const { categories } = useContext(CategoriesContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (Object.keys(categories).length > 0) {
            setIsLoading(false);
        }
    }, [categories]);

    return (
        <div className="home-container">
            <h2>
                CROWN <CrownLogo /> CLOTHING
            </h2>
            {isLoading ? (
                <p>Loading categories...</p>
            ) : (
                <Categories categories={categories} />
            )}
        </div>
    );
};

export default Home;
