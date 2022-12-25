import Navbar from "../components/navbar"
import Repos from "../components/repos";
import Search from "../components/search";
import User from "../components/user";
import Info from '../components/info';
import { useGlobal } from "../context/context";
import loadingGif from "../image/preloader.gif"

const Dashbord = () => {
    const { loading } = useGlobal();
    if (loading) {
        return <img src={loadingGif} alt="loading" className="loadingImage" />
    } else {
        return (
            <>
                <Navbar />
                <Search />
                <Info />
                <User />
                <Repos />
            </>

        )
    }

}

export default Dashbord;