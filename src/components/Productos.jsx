import { useEffect, useState } from "react";
import Producto from "./Producto";
import { getAll } from "../Services/servicesML";
import { Boton } from "./Boton";


export default function Productos (){
    const [productos, setProductos] = useState([]);
    const [carga, setCarga] = useState(true);
    const [busco, setBusco] = useState("")
    const [buscar, setBuscar] = useState("consolas")
    const titulo = "Productos Encontrados" 
    const abuscar = (event) => {
      if(event?.keyCode==13){
        console.log("Si")
      }
      const value = event?.target?.value;
      setBusco(value)
    }   
    const encontrar =() =>{
        setBuscar(busco)
        console.log(buscar)
    }
        useEffect(() => {
        const request = async () => {
          try {
            const data = await getAll(buscar);
            setProductos(data.results);
            setCarga(false);
            
          } catch (error) {
            console.log("Error", error);
          }
        };
        request();
      }, [buscar]);
      if (carga) {
        return <div>Espere unos segundos por favor</div>;
      } else {
        return (
          <>
          <div >
            <input
              className="buscar"
             type="text" 
             value={busco}
             onChange={abuscar}
            
             />
             <Boton
             className="btnbuscar"             
             nom="Buscar"
             click={encontrar}
             />
            </div>
            <div> <h3>{titulo}</h3> </div>
        <ul className="contenedor">
                 
          {productos.map((producto) => (
            <>            
            <li className="productos">
          <Producto
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            img = {producto.thumbnail}
          />           
          </li>
          </>       
          )          
          )
          }           
          
        
            </ul>
            </>
         )}
    
}