import { NavLink } from "react-router-dom"
import "./NavigationLinks.css"


const NavigationLinks = () => {
    return (
        <header className="header">
            <nav>
                <ul className="list">
                    <li>
                        <NavLink
                          to="/"
                          className={({isActive})=> 
                            isActive ? "active" : undefined
                        }
                        end
                          >HOME</NavLink>
                    </li>
                    <li>
                        <NavLink
                          to="/products"
                          className={({isActive})=> 
                            isActive ? "active" : undefined
                        }
                          >STORE</NavLink>
                    </li>
                    <li>
                        <NavLink 
                           to="/about"
                           className={({isActive})=> 
                            isActive ? "active" : undefined
                        }
                           >ABOUT</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationLinks;