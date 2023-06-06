import Error from "../pages/error";
import Home from "../pages/home";
import Movies from "../pages/movies";
import Series from "../pages/series";

export function componentToRender () {

    const path = window.location.pathname

    if (path === '/') return <Home />
    else if (path === '/movies') return <Movies />
    else if (path === '/series') return <Series />
    else return <Error />
}