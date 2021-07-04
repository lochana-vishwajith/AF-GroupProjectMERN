import React,{Component} from 'react'
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import axios from "axios";
import Header from "../HeaderComponent/header";

//"WorkshopConductor", "Researcher","Attendee"
export default class attendeeRegistration extends Component{
    constructor(props) {
        super(props);
        this.state ={
            name:'',
            email:'',
            password:'',
            mobile:'',
            category:'Attendee',
            payment:false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handlerChange=this.handlerChange.bind(this);
        this.Onchange = this.Onchange.bind(this);
    }

    handlerChange(e){
        this.setState({category:e.value});
    }
    Onchange(e){
        const{name,value} = e.target;
        this.setState({[name]:value})
    }

    onSubmit(e){

        e.preventDefault();


        const {name,email,password,mobile, category, payment} = this.state;
        const post ={
            name,email,password,mobile, category,payment
        }
        axios.post('http://localhost:5000/Users/addUsers',post)
            .then((res) =>{ alert('hello'+res.data.name+'You need to pay Entry FEE')
            console.log('hello')
                    sessionStorage.setItem('unpaid',res.data._id);
                    sessionStorage.setItem('payType','nawAttendee')
                window.location = '/pay'
            }
            )
            .catch((err)=>{alert('email or Mobile number is Registered before ')
            console.log(err)}
            )
}
 render() {

        return(
            <div>
                <div>
                    <Header />
                </div>

                <div><h1>Attendee Registration</h1></div>
                {console.log(this.state.obj+"hello world local storage")}
                <div className='container'>

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


                        <Button
                            type ={"submit"}
                            classname={"btn btn-secondary"}
                            value={"Proceed"}
                            onsubmit={this.onSubmit}
                        />

                    </form>




                </div>







            </div>


        )

    }

}
