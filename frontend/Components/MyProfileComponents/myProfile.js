import React,{Component} from "react";
import axios from "axios";
import Header from "../HeaderComponent/header";
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
    }



    componentDidMount() {
        const accessToken = localStorage.getItem('token');
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
    }

    workshopSelect(e){
        e.preventDefault();
        const id =this.state.data._id
        //window.location =''
    }

    researchSelect(e){
        e.preventDefault();
        const id =this.state.data._id
        //window.Location = ''
    }

    updateSelect(e){
        e.preventDefault();
        const id =this.state.data._id
        window.location = '/updateProfile'
    }
    render() {
        const attendee = (localStorage.getItem('category') == 'Attendee');
        const wrkS = (localStorage.getItem('category') == 'WorkshopConductor');
        const research = (localStorage.getItem('category') == 'Researcher');

        return (
            <div>{
                attendee ? (
                    <div>
                        <h1>Sorry You Need to be a Host to have a User Profile</h1>
                    </div>
                ) : (
                   <div></div>
                )

            }

                {
                    wrkS ? (
                        <div>
                                <h1>

                                    <Button
                                        type ={"submit"}
                                        classname={"btn btn-primary"}
                                        value={"See workshops"}
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
                                classname={"btn btn-primary"}
                                value={"See my Researches"}
                                onsubmit={this.researchSelect}
                            />
                        </div>
                    ):(
                        <div>

                        </div>
                    )

                }

            </div>




        )



    }


}