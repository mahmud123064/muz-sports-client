
const ClassDetails = ({ classItem }) => {
    console.log(classItem);

    const { available_seats, image, instructor_name, name, price } = classItem;
    return (
        <div>
            
            <div className="card w-96 bg-base-100  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src = {image} alt="Shoes" className="rounded-xl h-[300px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Class Name: {name}</h2>
                    <p>Instructor Name : {instructor_name}</p>
                    <p>Available Seats : {available_seats}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;