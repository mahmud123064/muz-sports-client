import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
// import { useEffect } from 'react';

const useSelectedClass = () => {

    // const { user } = useContext(AuthContext);
    const { user } = useAuth();
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedclasses', user?.email],
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/selectedclasses?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // }
        queryFn: async () => {
            const res = await axiosSecure(`/selectedclasses?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        }
    })

    return [selectedClass, refetch]
}

export default useSelectedClass;