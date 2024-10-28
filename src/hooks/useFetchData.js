import { useEffect, useState } from "react";

const useFetchData = ( url ) =>
{
  const [data, setData] = useState([]);
   
    useEffect( () =>{
    const fetchData = async () => {
       try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }  
    };
    fetchData();
  }, [url]);
    return { data };
};
export default useFetchData;
