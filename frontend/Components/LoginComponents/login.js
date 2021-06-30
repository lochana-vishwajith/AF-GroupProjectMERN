import React,{Component} from 'react'
import TextInput from "../TextInputComponent/textInputComponent";
import Button from "../ButtonComponent/buttonComponent";
import Header from "../HeaderComponent/header";
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



   // OnCLick = {(e) =>{navfunction(e,itemid)}
    //window.location = `/aRegistration/${courseID}'

    // window.location = '/aRegistration'
        e.preventDefault();
        const {email,password} = this.state;
        const user = {
            email,password
        }

        axios
            .post('http://localhost:5000/Users/userLogin',user)
            .then(res =>{alert('helo world'+res.data.token);
              localStorage.setItem('token',res.data.token);
                    localStorage.setItem('category',res.data.obj.category)
                alert(res.data.obj.category);
                    //  window.location = '/uRegistration'
                window.location='/profile';
            }
            )
            .catch(err=>{alert(err.message)})
        alert('On submit')
}

    render() {

        return(
            <div>
                    <Header/>
                <h1> Login Form </h1>
                <div className='container'>

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

                        <Button
                            type ={"submit"}
                            classname={"btn btn-primary"}
                            value={"submit"}
                            onsubmit={this.onSubmit}
                        />
                    </form>
                </div>

            </div>
        )

    }


}