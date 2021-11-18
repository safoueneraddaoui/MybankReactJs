import React,{ Component } from 'react'
import ClientService from "../services/ClientService";

class AddClientsComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            cin:'',
            firstName:'',
            lastName:'',
            email:''
        }

        this.changeCinHandler = this.changeCinHandler.bind();
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind();
        this.changeLastNameHandler = this.changeLastNameHandler.bind()
        this.changeEmailHandler = this.changeEmailHandler.bind()
        this.saveClient = this.saveClient.bind(this)
    }

    saveClient = (e) => {
        e.preventDefault();
        let client = {cin:this.state.cin, firstName:this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        console.log('client => ' + JSON.stringify(client));

        ClientService.addClients(client).then(res => {
            this.props.history.push('/clients')
        });
    }

    cancel(){
        this.props.history.push('/');
    }
    changeCinHandler = (event) => {
        this.setState({cin:event.target.value});
    }
    changeFirstNameHandler = (event) => {
        this.setState({firstName:event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName:event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email:event.target.value});
    }

    render() {
        return(
            <div>
                <h1>Client Form</h1>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Client</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Cin</label>
                                    <input placeholder="CIN" name="cin" className="form-control"
                                    onChange={this.changeCinHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>First Name</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                    onChange={this.changeFirstNameHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                    onChange={this.changeLastNameHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input placeholder="Email" name="email" className="form-control"
                                    onChange={this.changeEmailHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveClient}> Save </button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                style={{marginLeft: "10px"}}> Cancel </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default AddClientsComponent;
