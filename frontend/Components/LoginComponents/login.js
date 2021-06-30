import React,{Component} from 'react'
import "./login.css";
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import Header from "../HeaderComponent/header";
import Footer from "../FooterComponent/footer";
import axios from "axios";
export default class login extends Component{
    constructor(props) {
        super(props);

        this.state ={
            email:'',
            password:'',
            user:'admin'
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.Onchange = this.Onchange.bind(this);
    }

    Onchange(e){
        const{name,value} = e.target;
        this.setState({[name]:value})
    }



onSubmit(e){


        e.preventDefault();
        const {email,password} = this.state;
        const user = {
            email,password
        }
        if(email == "editor" && password == "editor"){
            window.location = '/displayComMembersEditor'
        }
        else if(email == "reviewer" && password == "reviewer"){
            window.location = '/researchReview'
        } 
        else if(email == "admin" && password == "admin"){
            window.location = '/homePageAccept'
        }


        axios
            .post('http://localhost:5000/Users/userLogin',user)
            .then(res =>{alert('helo world'+res.data.token);
              localStorage.setItem('token',res.data.token);
                    localStorage.setItem('category',res.data.obj.category)
                    localStorage.setItem('uid',res.data.obj._id)
                alert(res.data.obj.category);
                if(res.data.obj.category == "attendee"){
                    window.location = '/researchAccepted'
                }
                else{
                    window.location='/profile';
                }
                    
                
            }
            )
            .catch(err=>{alert(err.message)})
       
}

    render() {

        return(
            <div className = "login-outer-box">

                    <Header/>

                <div className='container'>
                <div className ="loginOuterDiv">
                <div className="col-6 inner-box">

                    <h1> Login Form </h1>
                    <form>

                        <TextInput
                            name={"email"}
                            placeholder={"Enter email"}
                            fieldValue={"Email"}
                            onchange={this.Onchange}
                        />

                        <TextInput
                            name={"password"}
                            placeholder={"Enter Password"}
                            fieldValue={"password"}
                            type={"password"}
                            onchange={this.Onchange}
                        />
                    <center>
                        <Button
                            type ={"submit"}
                            classname={"btn btn-primary"}
                            value={"Login"}
                            onsubmit={this.onSubmit}
                        /></center>
                    </form>
                </div>
                </div>
                   <div className="footer-box">
                      
                       </div>
                   </div>
            </div>
        )

    }


}