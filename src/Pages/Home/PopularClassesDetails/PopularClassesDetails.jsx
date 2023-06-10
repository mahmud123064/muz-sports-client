

const PopularClassesDetails = ({ item }) => {
    const {image, name, available_seats} = item;
    console.log(item);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src = {image} alt="Shoes" className="rounded-xl h-[300px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Class Name: {name}</h2>
                    <p>Available Seats : {available_seats}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default PopularClassesDetails;