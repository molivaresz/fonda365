import { createContext, useEffect, useState} from "react";

export const Fonda365Context = createContext();

const PRODUCTOS_URL = "/productos.json";
const CATEGORIA_URL = "/categoria.json";

const Fonda365ContextProvider = ({ children }) => {
    const [dataProducto, setDataProducto] = useState([])
    const [dataCategoria, setDataCategoria] = useState([])
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

    const getDetalleProducto = async (idproducto) => {
        try {
            console.log("Producto: " + idproducto)
        } catch (error) {
            console.log(error);
        }
    };

    const getCategorias = async () => {
        try {
            const response = await fetch(CATEGORIA_URL);
            const dataCategorias = await response.json();

            setDataCategoria(dataCategorias)
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