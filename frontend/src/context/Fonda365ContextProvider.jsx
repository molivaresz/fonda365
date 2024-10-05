import { createContext, useEffect, useState} from "react";

export const Fonda365Context = createContext();

const PRODUCTOS_URL = "/productos.json";
const PRODUCTOSBANNER_URL = "/productosbanner.json";

const Fonda365ContextProvider = ({ children }) => {
    const [dataProducto, setDataProducto] = useState([])
    const [dataProductoBanner, setDataProductoBanner] = useState([])
//    const [carro, setCarro] = useState([])
    

    const getProductos = async () => {
        try {
            const response = await fetch(PRODUCTOS_URL);
            const dataProductos = await response.json();

            setDataProducto(dataProductos)
        } catch (error) {
            console.log(error);
        }
    };

    const getProductosBanner = async () => {
        try {
            const response = await fetch(PRODUCTOSBANNER_URL);
            const dataProductosbanner = await response.json();

            setDataProductoBanner(dataProductosbanner)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductos()
        getProductosBanner()
    }, [])

    return (
        <Fonda365Context.Provider value={{dataProducto, setDataProducto, dataProductoBanner, setDataProductoBanner}}>
            {children}
        </Fonda365Context.Provider>
    );
}

export default Fonda365ContextProvider