import axios from 'axios'
import {useQuery} from "react-query"

function getProductos() {
    return axios.get('http://localhost:8080/sql?sql=select * from products')
}
export function Producto() {
    const {data: productos, isLoading, isError} = useQuery(['productos'], getProductos)
    if (isLoading) {
        return<div>Cargando....</div>
     }
    return ( 
        <div>{JSON.stringify(data)}</div>
    
    )
    return (
        <div>productos11111</div>
    )
}