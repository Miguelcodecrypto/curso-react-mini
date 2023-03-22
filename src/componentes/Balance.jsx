import { useEffect } from "react"
import{ethers} from 'ethers'
import { useState } from "react"
const {ethereum} = window

export function Balance(){
    const [cuenta, setCuenta] = useState(null)
    useEffect(() => {
        ethereum && ethereum.request({method:'eth_requestAccount'}).then(cuenta => {
            setCuenta(cuenta[0])
            ethereum.on('accountChanged', (i) => {
                setCuenta(i[0])
            })
         })
    },[])
    useEffect(() => {
        if(cuenta) {
            const provider = new ethers.providers.Web3Provider(ethereum)
            provider.getBalance(cuenta).then(balance => {
                console.log(ethers.utils.formatEther(balance))
            })
        }
    }, [cuenta])

    if(!ethereum){
        return <div>No hay Metamask</div>

    }
        return (
            <div>
              <p>
                Cuenta:
             {
                  cuenta ? cuenta : 'Cargando...'
             }
             </p>
             <p>
                Saldo:
            { 
                  balance ? cuenta : 'Cargando balance...'    


              } 
              </p> 
              <form className="form-inline" onSubmit={handleOnSubmit(submit)}>
                   <div className="form-group mb-3">
                     <label htmlFor="address">Adress</label>
                     <input id="address" className="form-control" {...register("address")} />
                   </div>
                   <div className="form-group mb-3">
                       <label htmlFor="amount">Adress</label>
                       <input id="amount" className="form-control" {...register("amount")} />
                </div>
                <button type="submit" className="btn btn-primary mb-3">Send</button>
                </form>

        
            </div>
    
        )
}