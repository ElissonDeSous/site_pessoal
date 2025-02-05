'use client'

import Topo from "./topo/topo"

export default function Pagina(props:any){
    return(
        <div>
           <Topo/>
            <main>
              {props.children}
            </main>
        </div>
    )
}