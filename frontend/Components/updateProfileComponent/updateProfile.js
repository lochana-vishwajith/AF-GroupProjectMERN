import React,{Component} from 'react'
import axios from "axios";
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";

export default class updateProfile extends Component{
    constructor(props) {
        super(props);
        this.state ={
            id:'',
            linkedIn:'',
            description:'',
            awards:'',

        }
        this.handlerChange = this.handlerChange.bind(this);
        this.Onchange=this.Onchange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    handlerChange(e){
        this.setState({category:e.value});
    }
    Onchange(e){
        const{name,value} = e.target;
        this.setState({[name]:value})
    }

    componentDidMount() {


        const accessToken = sessionStorage.getItem('token');
        axios.interceptors.request.use(
            config =>{
                config.headers.authorization =`${accessToken}`
                return config;
            },
            error => {return Promise.reject(error)}
        )
        axios.get('http://localhost:5000/Users/myProfile').then(res=>{
            this.setState({linkedIn:res.data.linkedIn})
            this.setState({description:res.data.description})
            this.setState({awards:res.data.awards})
            this.setState({id:res.data._id})

        }).catch(
            err =>{ alert(err)}
        )
    }



    async onSubmit(e){
        e.preventDefault();


        const{
            linkedIn,
            description,
            awards} =this.state

        const post={
            linkedIn,
            description,
            awards,
        }
        axios
            .put(`http://localhost:5000/Users/updateUser/`,post)
            .then(res=>{
                alert('details update Success');
                window.location='/profile'
            })
            .catch((err)=>{
                alert('An error occurred')
                alert(err.message)})
    }

    render() {

        return(

            <div>

                <h1>Update Profile</h1>


                <TextInput

                    name={"linkedIn"}
                    fieldValue={"linkedIn"}
                    value={this.state.linkedIn}
                    onchange={this.Onchange}
                />

                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                Update Your Awards
                                    </span>
                </div>
                <textarea
                    value={this.state.awards}
                    id="awards"
                    name="awards"
                    rows="6"
                    cols="160"
                    onChange={this.Onchange}
                ></textarea>
            <br></br>
                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                Update Your Description
                                    </span>
                </div>
                <textarea
                    value={this.state.description}
                    id="description"
                    name="description"
                    rows="6"
                    cols="160"
                    onChange={this.Onchange}
                ></textarea>
            <br></br>



                <Button
                    type ={"submit"}
                    classname={"btn btn-secondary"}
                    value={"Save Updates"}
                    onsubmit={this.onSubmit}
                />
            </div>
        )


    }
}