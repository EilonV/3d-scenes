
import { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import { useLocation } from 'react-router-dom'

export const Nav = () => {

    const location = useLocation()

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                $('a')[0].classList.value = 'active'
                break;
            case '/rocket':
                $('a')[1].classList.value = 'active'
                break;
            case '/sweeper':
                $('a')[2].classList.value = 'active'
                break;
            default:
                break;
        }
    }, [])

    const activateLink = (e) => {
        let el = e.target
        $('nav').children().removeClass('active')
        $(el).addClass('active')
    }

    return <nav onClick={(e) => activateLink(e)}>
        <Link to="/">Day/Night</Link>
        <Link to="/rocket" >Rocket</Link>
        <Link to="/sweeper" >Sweeper</Link>
    </nav>
}