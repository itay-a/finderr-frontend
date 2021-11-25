import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';


// import a9 from '../assets/img/a9.PNG';

const GigsCarusel = () => {
    const properties = {
        duration: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        prevArrow: <div className="indicator" style={{ width: "30px", marginRight: "-10px" }}><FaChevronLeft style={{fontSize: "38px",padding: "10px", backgroundColor: "white", borderRadius: "50%"}}/></div>,
        nextArrow: <div className="indicator" style={{ width: "30px", marginLeft: "-17px" }}> <FaChevronRight style={{fontSize: "38px", padding: "10px", backgroundColor: "white", borderRadius: "50%"}}/> </div>


    };
    return (
        <div className="gigs-carusel">
            <Slide {...properties}>
                {/* <div className="img-div">
                    <img src={a8} alt="1" style={{objectFit: "cover", maxWidth: "800px"}} />
                </div> */}
                {/* <div className="img-div">
                    <img src={seo} alt="1" style={{ maxHeight: "400px", objectFit: "cover" }} />
                </div> */}
                <div className="img-div">
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/aeda3a9b83532a85e7c8ab9c110fff68-1633597095/3D%20MOCKUP%2002/do-flat-modern-minimalist-logo-design.JPG
                    " alt="1" style={{ maxHeight: "450px", objectFit: "cover" }} />
                </div>
                <div className="img-div">
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/215100800/original/ac6f5f0166546119062d9ae7eb7097c14afc1c6a/do-flat-modern-minimalist-logo-design.jpg
                    " alt="1" style={{ maxHeight: "450px", objectFit: "cover" }} />
                </div>
                <div className="img-div">
                    <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/215100800/original/42c920bdd01d06290e824322141d77b29d56517f/do-flat-modern-minimalist-logo-design.jpg
                    " alt="1" style={{ maxHeight: "450px", objectFit: "cover" }} />
                </div>
                {/* <div className="img-div">
                    <img src={a9} alt="1" style={{objectFit: "cover"}}/>
                </div> */}
            </Slide>
        </div>
    )
}

export default GigsCarusel;
