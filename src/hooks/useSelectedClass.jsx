import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
// import { useEffect } from 'react';

const useSelectedClass = () =>{

    const {user} = useContext(AuthContext);

    const { refetch, data: selectedClass = []  } = useQuery({
        queryKey: ['selectedclasses', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selectedclasses?email=${user?.email}`)
            return response.json()
        }
      })

      return[ selectedClass, refetch]

// useEffect(()=>{
//     fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// },[])
}

export default useSelectedClass;