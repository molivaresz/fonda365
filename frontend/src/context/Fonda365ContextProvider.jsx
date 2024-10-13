import { createContext, useEffect, useState} from "react";
import axios from "axios";

export const Fonda365Context = createContext();

//const PRODUCTOS_URL = "/productos.json";
const FONDA365API_URL = "http://localhost:3000";

const Fonda365ContextProvider = ({ children }) => {
    const [dataProducto, setDataProducto] = useState([])
    const [dataCategoria, setDataCategoria] = useState([])
//    const [carro, setCarro] = useState([])
    

    const getProductos = async () => {
        try {
            axios.get(FONDA365API_URL + "/productos").then((response) => {
                setDataProducto(response.data);    
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getDetalleProducto = async (idproducto) => {
        try {
            console.log("Producto: " + idproducto)
        } catch (error) {
            console.log(error);
        }
    };

    const getCategorias = async () => {
        try {
            axios.get(FONDA365API_URL + "/categorias").then((response) => {
                setDataCategoria(response.data);    
            });
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        getProductos()
        getCategorias()
    }, [])

    return (
        <Fonda365Context.Provider value={{dataProducto, setDataProducto, dataCategoria, setDataCategoria, getDetalleProducto}}>
            {children}
        </Fonda365Context.Provider>
    );
}

export default Fonda365ContextProvider