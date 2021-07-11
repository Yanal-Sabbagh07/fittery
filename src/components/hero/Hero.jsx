import './Hero.scss'
import Topbar from '../topbar/Topbar'
export default function Hero() {
    return (
        <div className="hero">
           <Topbar />
           <div className="txt">
                <h1>Support local restaurants.<br />Eat <em>great food</em></h1>
           </div>
        </div>
    )
}
