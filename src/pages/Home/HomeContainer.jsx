import './Home.css'
import teamLogo from '../../assets/glucose_logo.png'
import Layout from "../../components/Layout/Layout.jsx";

export const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <img
          src={teamLogo}
          alt="Description of image"
          className="home-image"
        />
      </div>
    </Layout>
  );
};