import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Card} from './card.jsx'
import {Data} from './Data.jsx'

let ui = <div style={{backgroundColor:"black",width:"100vw",display:"flex",flexWrap:"wrap"}}>
        {Data.map(item => 
            <Card company={item.companyName} post={item.roles} date = {item.releaseDate} pay = {item.amount} locate = {item.location}/>
        )}
        </div>

createRoot(document.getElementById('root')).render(ui)
