import React,{ Component } from 'react'
import ClientService from "../services/ClientService";

class ListClientsComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {

            clients :[]

        }
    }
    componentDidMount() {
        ClientService.getClients().then((res) => {
            this.setState({clients: res.data})
        })
    }

    render() {
        return (
            <div>
                <h2 className= "text-center"> Client List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Client First Name</th>
                                <th>Client Last Name</th>
                                <th>Client CIN</th>
                                <th>Client Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.clients.map(
                                client =>
                                    <tr key={client.id}>
                                        <td>{client.firstName}</td>
                                        <td>{client.lastName}</td>
                                        <td>{client.cin}</td>
                                        <td>{client.email}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListClientsComponent;
