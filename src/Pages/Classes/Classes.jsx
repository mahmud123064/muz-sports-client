import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ClassDetails from "../ClassDetails/ClassDetails";


const Classes = () => {

    const [classes, setClasses] = useState([])
    console.log(classes);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])

    return (
        <div className="mt-16 mb-12">
            <Helmet>
                <title> MUZ SPORTS | Classes</title>
            </Helmet>

            <div className="">
                <h3 className=" text-center text-3xl font-semibold text-orange-600 mb-5">All Classes</h3>
                <div className="w-52 mx-auto mb-12 border border-red-600">
                    <hr />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                    {
                        classes.map(classItem => <ClassDetails
                            key={classItem._id}
                            classItem={classItem}
                        >

                        </ClassDetails>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Classes;