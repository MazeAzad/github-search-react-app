import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import LoadingGif from "../image/preloader.gif"
const ProtectedRoute = ({ children }) => {
    const {
        user,
        isAuthenticated,
        isLoading

    } = useAuth0();
    if (!isLoading) {
        if (user && isAuthenticated) {
            return children
        } else {
            return <Navigate to="/login" />
        }
    } else {
        <img src={LoadingGif} alt="loading" className="loadingImage" />
    }



}

export default ProtectedRoute;