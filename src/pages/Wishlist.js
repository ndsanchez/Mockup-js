import React from 'react'
import Menu from '../components/Menu'
import SideBar from '../components/SideBar'
import starImg from '../images/star.png'

class Wishlist extends React.Component{
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
                                    <img src={starImg} alt="mesagges" className="img-w"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Wishlist