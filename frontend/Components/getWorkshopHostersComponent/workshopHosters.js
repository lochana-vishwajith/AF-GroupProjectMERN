import React,{Component} from 'react'
import axios from "axios";

export default class workshopHosters extends Component{
    constructor(props) {
        super(props);
        this.state ={
            users:[],
            wUsers:[],
        }
    }
    componentDidMount() {

        axios.get('http://localhost:5000/Users/getUsers').then(
            res=>{
                const arr =[];
                res.data.map(r =>{
                       if(r.category == 'WorkshopConductor' ){
                           alert("awa");
                           arr.push(r);
                           this.setState({wUsers:arr})
                       }
                   })
            }
        ).catch(
            err=>{
                console.log(err)
            }
        )

    }

    render() {
        const {wUsers} = this.state
        return (
            <div>{
                (this.state.wUsers) ? (
                    <div>
                        <h1>Workshop Hoster</h1>
                        <div className="container">
                            {this.state.wUsers.map(c =>{
                                return (
                                    <div className="card mb-3" key ={c._id}>
                                        <img src={c.profilePic} className="img-thumbnail"/>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{c.name}</li>
                                            <li className="list-group-item">{c.description}</li>
                                            <li className="list-group-item">{c.awards}</li>
                                            <li className="list-group-item" href ={c.linkedIn}>{c.linkedIn}</li>
                                        </ul>
                                    </div>

                                )
                            })}
                        </div>)

                    </div>
                ) : (
                    <h1>Sorry there is no Workshop Conductors</h1>
                )

            }




            </div>




        )
    }

}