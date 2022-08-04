const { useState, useEffect } = require("react")

const useAttendance = (user) => {
    const email = user?.email;
    // const classes = 'Six'
    const classes = user?.class
    const [attendance, setAttendance] = useState([]);
    
    useEffect(() => {

        fetch(`http://localhost:5000/attendance/${classes}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data => setAttendance(data));

    }, [user])

    console.log(setAttendance)

    let dateAttendance = [];

    attendance?.map(i => {
        i.newArr.map(dates => {
            if(dates.email === email){
                dateAttendance.push(dates)
            }
        })
    })

    const present = dateAttendance?.filter(x => x?.status?.includes('P'));
    const absent = dateAttendance?.filter(x => x?.status?.includes('A'));


    return [attendance, dateAttendance, present, absent ];
}
export default useAttendance;