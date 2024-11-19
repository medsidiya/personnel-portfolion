import './footer.css';

function Footer() {
    return ( <footer>
        <div className="flex">
            <p>&copy; {new Date().getFullYear() } All copy rigth</p>
        </div>
    </footer>  );
}

export default Footer;