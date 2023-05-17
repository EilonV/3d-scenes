
import { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import { useLocation } from 'react-router-dom'

export const Nav = () => {
    
    const location = useLocation()

    useEffect(() => {
        location.pathname !== '/rocket' ?
            $('a')[0].classList.value = 'active' :
            $('a')[1].classList.value = 'active'
    })

    const activateLink = (e) => {
        let el = e.target
        $(el).siblings().removeClass('active')
        $(el).addClass('active')
    }

    return <nav onClick={(e) => activateLink(e)}>
        <Link to="/">Day/Night</Link>
        <Link to="/rocket" >Rocket</Link>
    </nav>
}