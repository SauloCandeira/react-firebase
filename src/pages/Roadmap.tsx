import Countdown2 from "../components/Countdown/Countdown2"
import Sidebar from "../components/Sidebar/Sidebar"
import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/init-firebase'

export function Roadmap() {

    const [dates, setDates] = useState([])
    // const target = new Date("12/31/2024 23:59:59");
    // console.log('target', target)

    useEffect(() => {
        getDates()
    }, [])

    function getDates() {
        const concursoColletonRef = collection(db, 'todos' )
        getDocs(concursoColletonRef)
            .then(response => {
                const con = response.docs.map(doc => ({ 
                    data: doc.data(), 
                    id: doc.id,
                }))
                setDates(con)
            })
            .catch(error => console.log(error.message))
    }


    console.log(dates)
    dates.map((item, index) => {
 
        // console.log('item', item.data.date) 
    })


    return (
        <>
        
            <div style={{backgroundColor: '#f1f1ef', height: '1300px'}}>

                <Sidebar />

                <div style={{padding: '20px', marginLeft: '19.0rem'}}>

                    <button onClick={() => getDates()}> Refresh concursos </button>

                    {dates.map((item, index) => {
                        return (   

                            <div key={index} style={{padding: '30px', marginTop: '20px', backgroundColor: '#fff', marginLeft: '20rem'}}>
                                

                                <Countdown2  data={item.data.date} />

                            </div>
                        )     
                    })}

                </div>
                
            </div>
        
        </>
    )
}