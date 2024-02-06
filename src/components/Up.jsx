// @ts-nocheck

import { useEffect , useState } from 'react';
export default function Up() {
    const [up , setUp] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setUp(true)
            }else{
                setUp(false)
            }
        })
    }, [])

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
  return (
    <button onClick={scrollUp} className= {up === true ?"scrolltop icon-keyboard_arrow_up show" : "scrolltop icon-keyboard_arrow_up"}></button>
  )
}
