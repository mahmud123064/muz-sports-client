import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
// import { useEffect } from 'react';

const useSelectedClass = () => {

    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedclasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedclasses?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        }
    })

    return [selectedClass, refetch]
}

export default useSelectedClass;