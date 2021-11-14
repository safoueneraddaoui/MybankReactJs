import React,{ Component } from 'react'

class HeaderComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {



        }
    }

    render() {
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }

}

export default HeaderComponent;
