import { createContext, useState } from "react";
// import axios from 'axios';
import { URL } from "../baseUrl";

export const AppContext = createContext();

export function AppContextProvider ({children}){
    const [loading, setLoading] = useState(false);
    const [posts , setPosts] = useState({});
    const [page, setPage] = useState(1);
    const [totalPage , setTotalPage] = useState(null);


    async function fetchBlogPost(page = 1) {
        setLoading(true);
        let url = `${URL}?page=${page}`;
        // console.log('====================================');
        // console.log(url);
        // console.log('====================================');
        
        try {
            const result = await fetch(url);
            const data = await result.json();
            // const {data} =  await axios.get(url);
            console.log(data);
            setPage(data.page);
            console.log(data.posts)
            setPosts(data.posts);
            setTotalPage(data.totalPages);
        } catch (error) {
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPage(null); 
        }

        setLoading(false);
    }


    function handlePageChange(page) {
        setPage(page);
        fetchBlogPost(page);
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchBlogPost, 
        handlePageChange
    };

    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>  )  

}