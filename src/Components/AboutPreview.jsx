import {Link} from 'react-router-dom';

function AboutPreview() {
    return (
        <div className='about-preview'>
            <h2 className='section-header'>Thanks for shopping with us</h2>
            <p id='about-preview-txt'>We're glad to have you join our journey as a new indie fashion house.
                It all started with our designer. She didn't just want to design for any brand. She believed 
                her vision could stand out and resonate with consumers. So she kicked off her own brand. And we're
                thrilled that you're here to see it.
            </p>
            <button className='nav-btn'>
                <Link to="/about" className='nav-link'>Learn more</Link>
            </button>
        </div>
    )
}

export default AboutPreview;