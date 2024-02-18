import Header from '../components/Header';
import Footer from "../components/Footer";
import MainContent from "../components/Main/MainContent";

export default function Checkout() {
    return (
      <div className="container">
        <Header name={'John'}/>
        <MainContent />
        <Footer />
      </div>
    );
  }