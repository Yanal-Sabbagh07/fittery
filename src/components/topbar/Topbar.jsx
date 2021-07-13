import './Topbar.scss';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                   <a href="#" className="logo">fittery</a> 
                </div>
                <div className="right">
                    <Link
                        
                        to={`/restaurants`}
                        style={{
                        textDecoration: 'none',
                        }}
                    >
                    
                    <a href ="#" className="Restaurants">Our Restaurants</a>
                    </Link>

                    <a href ="#" className="map">Restaurants Location</a>
                    
                </div>
            </div>
        </div>
    )
}
