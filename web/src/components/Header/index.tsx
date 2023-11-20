import { useState, useEffect } from 'react'
import searchSVG from '../../assets/imgs/search.svg'
import './style.css'

interface SearchProps {
    search: boolean
}

const Header: React.FC<SearchProps> = ({ search }) => {
    
    const [width, setwidth] = useState(window.innerWidth)
    const [menu, setMenu] = useState(false)

    useEffect(() => {

        const handleWidth = () => {
            setwidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWidth)

        return () => {
            window.removeEventListener('resize', handleWidth)
        }
      
  }, []);

  const handleMenu = () => {
    if(menu == false) {
        setMenu(true)
    }else {
        setMenu(false)
    }
  }

  const windowWidthButton = width < 768
  const windowWidthSearch = width > 496


    return (
    <div className="flex space header">
        <div className='flex'>
            <h1> LoginShop </h1>
            {search == true ?
            <div className="flex center search">
                <input type="text" placeholder="Search "/>
                <img src={searchSVG} alt="" />
            { windowWidthSearch  ?
                <p> Filter </p>
                : <></> }
            </div>
            : <></>}
        </div>
        {windowWidthButton == false || menu ==true ? 
            <div className='flex center links'>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/signup">SignUp</a>
                <a href="">Logout</a>
                { windowWidthSearch == false && search == true ? 
                    <p> Filter </p>
                : <></>}
            </div>
            : <> </>}
        {windowWidthButton ? 
        <div className='menu' onClick={handleMenu}>
            <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_55)">
                    <path d="M0 0H30.4348V3.66667H0V0ZM0 9.16667H30.4348V12.8333H0V9.16667ZM0 18.3333H30.4348V22H0V18.3333Z" fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip0_2_55">
                    <rect width="30" height="22" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
        : <></>}


    </div>
  )
}

export default Header
