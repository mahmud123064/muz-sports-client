import { useEffect } from "react";
import { useState } from "react";
import PopularClassesDetails from "../PopularClassesDetails/PopularClassesDetails";

const PopularClasses = () => {

    const [popularClasses, setPopularClasses] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/classes')
    //     .then(res => res.json())
    //     .then(data => {
    //         const sortedData = res.sort((a,b)=> b.available_seats - a.available_seats );
    //         const result = sortedData.slice(0,6)
    //         setPopularClasses(result)
    //     })
    // },[])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/classes');
            const jsonData = await response.json();
            const sortedData = jsonData.sort((a, b) => b.available_seats - a.available_seats);
            const topSixData = sortedData.slice(0, 6);
            console.log(topSixData);
            setPopularClasses(topSixData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
    

    
    return (
        <div>
            <h1 className="text-center text-3xl text-red-700 font-bold">Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                {
                    popularClasses.map(item => <PopularClassesDetails
                    key={item._id}
                    item ={item}
                    >

                    </PopularClassesDetails>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;