import { Link } from "react-router-dom";
import '../App.css'

function WelcomePage() {
  return (
    <>
    <div className="divWelcome">
    <h1> Hola! I benvingut a quoteApp! </h1>
    <h3> In this webApp you'll be able to make a quote on the services you require. </h3>

<Link to='/' className="link">Home</Link>
<Link to='/quotePage' className="link">Quote Page</Link>

    </div>
    </>
  );
}

export default WelcomePage;