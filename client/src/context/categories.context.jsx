import { createContext, useState, useEffect } from "react";
import axios from "axios";

const server_url = "http://localhost:3001";

export const CategoriesContext = createContext({
    categories: {},
    data: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState({});
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch categories and data from your backend using Axios
                const categoriesResponse = await axios.get(`${server_url}/categories`)
                const dataResponse = await axios.get(`${server_url}/data`)

                // Set categories and data state
                setCategories(categoriesResponse.data);
                setData(dataResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const value = {
        categories,
        data,
    };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
