import React,{Component} from "react";
import axios from "axios";
import './myprofile.css'
import Header from "../HeaderComponent/header";
import Footer from "../FooterComponent/footer"
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import data from "bootstrap/js/src/dom/data";

export default class myProfile extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:'',
        }
        this.researchSelect =this.researchSelect.bind(this);
        this.updateSelect =this.updateSelect.bind(this);
        this.workshopSelect =this.workshopSelect.bind(this);
        this.DeleteSelect =this.DeleteSelect.bind(this);
    }
    componentDidMount() {
        if( localStorage.getItem('token')){
            const accessToken = localStorage.getItem('token')
        const category =localStorage.getItem('category');
            const authorizations = 'x-auth-user';
        axios.interceptors.request.use(
            config =>{
                config.headers.authorization =`${accessToken}`
                return config;
            },
        error => {return Promise.reject(error)}
        )
        axios.get('http://localhost:5000/Users/myProfile').then(res=>{
            this.setState({data:res.data})
        }).catch(
            err =>{ alert(err)}
        )
        }else{
            alert("Sorry You Are Not AN Registered Hoster ")
            window.location = '/'
        }
    }

    workshopSelect(e){
        e.preventDefault();
        const id =this.state.data._id
        

        window.location ='/addworkshop'
    }

    researchSelect(e){
        e.preventDefault();
        const id =this.state.data._id
        window.location = `/researchEdit/${id}`
    }

    updateSelect(e){
        e.preventDefault();
        window.location = '/updateProfile'
    }

    DeleteSelect(e){
        if(this.state.data.workshop){
            alert('Sorry You HAve ADDEd Workshop ')
            window.location = '/updateProfile'
        }else if(this.state.data.research){
            alert('Sorry You HAve ADDEd research ')
            window.location = '/updateProfile'
        }else{
        e.preventDefault();
        axios.delete('http://localhost:5000/Users/deleteUser').then(
            res => {
                alert('Account Deleted');
                localStorage.clear();
                window.location ='/';
                alert(res.data);}
        ).catch(err=>{
            alert(err.data);
        })
        }

    }
    render() {
        const attendee = (localStorage.getItem('category') == 'Attendee');
        const wrkS = (localStorage.getItem('category') == 'WorkshopConductor');
        const research = (localStorage.getItem('category') == 'Researcher');

        return (
            <div>

                <Header/>
                {
                attendee ? (
                    <div>
                        <h1>Sorry You Need to be a Host to have a User Profile</h1>
                    </div>
                ) : (
                   <div className={"outer-box-profile"}>
                       <div className="card box-profile" >
                               <div className="card-body ">
                                   <h1 className="card-title title-txt">{this.state.data.name}</h1>
                                   <img className="card-img-top" src="../../profileimage.webp" alt="Card image cap"/>
                                   <h5 className="card-text email-txt">{this.state.data.email}</h5>
                               </div>
                               <ul className="list-group list-group-flush">
                                   <b><li >{this.state.data.mobile}</li></b>
                                   <b><li >{this.state.data.linkedIn}</li></b>
                                   <b><li >{this.state.data.description}</li></b>
                                   <b><li >{this.state.data.awards}</li></b>
                               </ul>
                               <div className="card-body">
                                   <Button
                                       type ={"submit"}
                                       classname={"btn btn-warning"}
                                       value={"Update Info"}
                                       onsubmit={this.updateSelect}
                                   />
                                   <Button
                                       type ={"submit"}
                                       classname={"btn btn-danger"}
                                       value={"Delete Profile"}
                                       onsubmit={this.DeleteSelect}
                                   />
                               </div>
                       </div>



                   </div>
                )

            }

                {
                    wrkS ? (
                        <div>
                                <h1>

                                    <Button
                                        type ={"submit"}
                                        classname={"btn btn-success"}
                                        value={"Workshops"}
                                        onsubmit={this.workshopSelect}
                                    />
                                </h1>
                        </div>
                    ):(
                        <div>

                        </div>
                    )
                }

                {
                    research ? (
                        <div>
                            <Button
                                type ={"submit"}
                                classname={"btn btn-success"}
                                value={"See my Researches"}
                                onsubmit={this.researchSelect}
                            />
                        </div>
                    ):(
                        <div>

                        </div>
                    )

                }

                <div>
                

                </div>
            </div>




        )



    }


}