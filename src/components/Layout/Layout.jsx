import Navbar from '../NavBar/NavBar.jsx';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        © Blood Glucose Control team
      </footer>
    </div>
  );
};

export default Layout;