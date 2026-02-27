import './Footer.css';

function Footer({storeName, info, content}) {
    return <div className='footer'>
        <h1 className='footer-name'>{storeName}</h1>
        <p className='footer-text'>{info}</p>
        <p className='footer-text'>{content}</p>
    </div>
}

export default Footer;