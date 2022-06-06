const { useState, useEffect } = require("react")

const useOrders = (orders) => {

    console.log(orders)
    useEffect(() => {
        setOrder(orders)
    }, [orders])

    const [order, setOrder] = useState([])
  
    const pending = order?.filter(i => i?.status?.includes('pending')); 
    const shift = order?.filter(i => i?.status?.includes('shipt'));
    const unPaid = order?.filter(i => i?.paid !== true);

    return [pending, shift, unPaid];
}
export default useOrders;