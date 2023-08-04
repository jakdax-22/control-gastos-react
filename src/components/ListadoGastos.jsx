import Gasto from "./Gasto"

const ListadoGastos = ({gastos,setGastoEditar,eliminarGasto,filtro,gastosFiltrados}) => {
  return (
    <div>
        <div className="Listado-gastos contenedor">
            {
              filtro ? (
                <>
                  <h2>{gastosFiltrados.length ? 'Gastos' : "No hay gastos aún"}</h2>
                  {gastosFiltrados.map(gasto => (
                    <Gasto 
                        key={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                    />
              ))}
                </>
              ) : (
                <>
                  <h2>{gastosFiltrados.length ? 'Gastos' : "No hay gastos aún"}</h2>
                  {gastos.map(gasto => (
                    <Gasto 
                        key={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                    />
              ))}
                </>
              )
            }
            
        </div>
    </div>
  )
}

export default ListadoGastos