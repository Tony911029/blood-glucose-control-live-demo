import "./NotFound.css"
import {Button} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import MainButton from "../../components/MainButton/MainButton.jsx";
import Layout from "../../components/Layout/Layout.jsx";

export const NotFound = () => {
  const navigate = useNavigate(); // Updated from useHistory

  const handleGoHome = () => {
    navigate("/"); // Updated from history.push
  }

    return (
      <Layout>
        <div className={"not-found theme-color"}>
          <h1>404</h1>
          <h2>Oops!</h2>
          <h2>Page Not Found</h2>
          <div>Page you are trying to access could not be found</div>
          <MainButton btnLabel={"GO HOME"} onClick={handleGoHome}/>
        </div>
      </Layout>
    );
};
