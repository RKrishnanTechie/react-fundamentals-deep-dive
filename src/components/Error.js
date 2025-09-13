import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (    
        <div>
            <h1>404 Error</h1>
            <h2>Page Not Found!</h2>
            <p> {err.data}</p>
            
        </div>
    )
}
export default Error;
