// @ts-nocheck
import './footer.css'

export default function Footer() {
  
    function scroll(top){
      window.scrollTo({
          top: top,
          behavior: "smooth",
      });
    }
  return (
    <footer className='flex'>
      <ul className='flex'>
      <li onClick={()=>{scroll(0)}}>
            About
          </li>
          <li onClick={()=>{scroll(500)}}>
            Projects
          </li>
          <li onClick={()=>{scroll(999999)}}>
            Contact
          </li>
      </ul>

      <p>© 2024 IXON, All rights reserved.</p>
    </footer>
  )
}
