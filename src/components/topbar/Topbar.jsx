import './Topbar.scss';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                   <a href="#" className="logo">fittery</a> 
                </div>
                <div className="right">
                    <a href ="#" className="about">About</a>
                    <a href ="#" className="Restaurants">Restaurants</a>
                    <a href ="#" className="map">Map</a>
                    
                </div>
            </div>
        </div>
    )
}
