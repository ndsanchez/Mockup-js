import React from 'react'
import '../styles/menu.css'
import Menu from '../components/Menu'
import SideBar from '../components/SideBar'
import envelopeImg from '../images/envelope.png'

class Messages extends React.Component{
    render(){
        const { switchState, handleSwitch, handleMenu, menuActive } = this.props 
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <SideBar switchState={switchState} handleSwitch={handleSwitch}/>
                        <div className="col-sm col-md-8 col-lg-9 col-xl-10 first-color">
                            <div className="top-space-lg">
                                <Menu handleMenu={handleMenu} menuActive={menuActive}/>
                                <div className="text-center cont-sect">
                                    <img src={envelopeImg} alt="mesagges" className="img-w"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Messages