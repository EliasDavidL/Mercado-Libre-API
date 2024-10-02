import { useParams } from "react-router-dom"
import { getId } from "../Services/servicesML";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Detalle (){
    const {id} = useParams();    
    const [producto, setProducto] = useState([]);
    const [carga, setCarga] = useState(true);
    const titulo = "Producto Seleccionados" 
        useEffect(() => {
        const request = async () => {
          try {
            const data = await getId(id);
            setProducto(data);
            setCarga(false);
          } catch (error) {
            console.log("Error", error);
          }
        };
        request();
      }, []);
      
      console.log(producto.pictures)
      if (carga) {
        return <div>Buscando informacion del producto</div>;
      } else {
        return (
          <>
            <div> <h4>{titulo}</h4> </div>
            <div>
                <h3>{producto.title}</h3>
            </div>
            <div className="productoActual">
              <div className="img">
                {producto.pictures.map((imagen)=>(
                  <>
                  <div><img src={imagen.url} alt="" /></div>
                  </>
                ))}
            </div>
              <div className="detalle">
                <p>Precio</p>
                <p>`$ {producto.price}`</p>
                <p>Garantia</p>
                <p>{producto.warranty}</p>
                <p>Mas Detalles</p>
                {producto.attributes.map((producto) =>(
                  <>
                  <p>{producto.name}</p>
                  <p>{producto.value_name}</p>
                  </>
                ))}

              </div>
            </div>
            <Button className="compra" variant="primary">Comprar</Button>
        
            </>
         )}
    
}