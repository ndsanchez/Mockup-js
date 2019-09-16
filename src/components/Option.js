import React from 'react'

class Option extends React.Component {
    render(){
        const { handleMenu, pat, Title, Icon, Active} = this.props 
        return(
            <React.Fragment>
                <div>
                    <a id={pat} onClick={handleMenu.bind(this,pat)} href={pat} className="nav-link letter-sm">
                        <div className="text-center letter-lg">
                            <span>{Icon}</span>
                        </div>
                        <div className="text-center">
                            <span className={Active?"letter-selected letter-sm":"letter-no-selected letter-sm"}>{Title}</span>
                        </div>
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default Option