import './registration.css'
import React,{Component} from 'react';
import TextInput from '../TextInputComponent/textInputComponent'
import Header from "../HeaderComponent/header";
import Button from "../ButtonComponent/buttonComponent"
import axios from "axios";
import Select from 'react-select';

const options = [
    { value: 'WorkshopConductor', label: 'WorkshopConductor' },
    { value: 'Researcher', label: 'Researcher' },
];

export default class registration extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            mobile:'',
            linkedIn:'',
            category:'',
            description:'',
            awards:'',
            profilePic:'',
            selectedOption: options,
        }

        this.handlerChange=this.handlerChange.bind(this);
        this.Onchange = this.Onchange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
    }

    handlerChange(e){
        this.setState({category:e.value});
        }
    Onchange(e){
        const{name,value} = e.target;
        this.setState({[name]:value})
    }
    async onSubmit(e){
        e.preventDefault();
        const post={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            mobile:this.state.mobile,
            linkedIn:this.state.linkedIn,
            category:this.state.category,
            description:this.state.description,
            awards:this.state.awards,
            profilePic:this.state.profilePic,
        }


       axios
           .post('http://localhost:5000/Users/addUsers',post)
           .then(res=>{
               console.log('awaaaa');
               alert('details saved Success');
               alert(res.data)})
           .catch((err)=>{
               alert('An error occurred')
               alert(err.message)})
    }
    render() {
        return(
             <div>
                 <Header />
                    <div className="container">
                        <h1>Registration Page </h1>
                        <form>
                             <TextInput
                                name={"name"}
                                placeholder={"Enter Name"}
                                fieldValue={"Name"}
                                value={this.state.name}
                                onchange={this.Onchange}
                             />
                            <TextInput
                                name={"email"}
                                placeholder={"Enter Email"}
                                fieldValue={"Email"}
                                value={this.state.email}
                                onchange={this.Onchange}
                            />

                            <TextInput

                                name={"mobile"}
                                type={"number"}
                                placeholder={"Enter Mobile Number"}
                                fieldValue={"Mobile"}
                                value={this.state.mobile}
                                onchange={this.Onchange}
                            />
                            <TextInput

                                name={"password"}
                                type={"password"}
                                placeholder={"Enter Password"}
                                fieldValue={"password"}
                                value={this.state.password}
                                onchange={this.Onchange}
                            />

                            <TextInput

                                name={"linkedIn"}
                                placeholder={"Paste Link LinkedIn"}
                                fieldValue={"LinkedIn"}
                                value={this.state.linkedIn}
                                onchange={this.Onchange}
                            />

                            <TextInput

                                name={"description"}
                                type={"textarea"}
                                placeholder={"Description About You"}
                                fieldValue={"Description"}
                                value={this.state.description}
                                onchange={this.Onchange}
                            />

                            <TextInput

                                name={"awards"}
                                type={"textarea"}
                                placeholder={"Awards"}
                                fieldValue={"Awards"}
                                value={this.state.awards}
                                onchange={this.Onchange}
                            />


                            <Select
                                onChange={this.handlerChange}
                                options={this.state.selectedOption}
                            />

                            <Button
                                type ={"submit"}
                                classname={"btn btn-primary"}
                                value={"submit"}
                                onsubmit={this.onSubmit}
                            />
                        </form>
                    </div>
            </div>


         );


    }


}

