
import { Link } from "react-router-dom";
import $ from 'jquery'

export const Nav = () => {

    const activateLink = (e) => {
        let el = e.target
        $(el).siblings().removeClass('active')
        $(el).addClass('active')
        // console.log($(el.target).siblings());
    }

    return <nav onClick={(e) => activateLink(e)}>
        <Link to="/" className="active">Day/Night</Link>
        <Link to="/rocket" >Rocket</Link>
    </nav>
}