const { useState, useEffect } = require("react")

const useUsers = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data => setUser(data));
    }, [])

    console.log(users)

  
    const students = users?.filter(i => i?.role?.includes('student')); 
    const teachers = users?.filter(i => i?.role?.includes('teacher'));
    const gardens = users?.filter(i => i?.role?.includes('garden'));

    return [users, students, teachers, gardens];
}
export default useUsers;