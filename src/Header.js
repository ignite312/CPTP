import myImage from './cpto.webp'; // Import the image

const Navbar = () => {
    return ( 
        <nav className="navbar" style={{backgroundColor: "#f5f5f5", padding: "1rem"}}>
            <img src={myImage} alt="Description of your image" />
            <h1 style={{color : "#A9A9A9"}}>CP</h1><h1 style={{color : "black"}}>T</h1><h1>P</h1>
            <div className="links">
                <a href="/CPTP/Home">Home</a>
                <a href="/CPTP">Competitive Programming Stat</a>
            </div>
        </nav>
     );
}
 
export default Navbar;