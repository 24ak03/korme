import './Footer.css';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} My website.All rights reserved. </p>
                <ul className="footer-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">Collections</a></li>
                    <li><a href="#about">Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}