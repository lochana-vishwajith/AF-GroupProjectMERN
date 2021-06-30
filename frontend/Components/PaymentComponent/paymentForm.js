import React,{Component} from 'react'
import Select from "react-select";
import TextInput from "../TextInputComponent/textInputComponent"
import Header from "../HeaderComponent/header"
const options = [
    { value: 400, label: 'EntryFee' },
    { value: 200, label: 'HostingFee' },
];

export default  class PaymentForm extends Component{

    constructor(props) {
        super(props);

        this.state={
            name:'',
            idNumber:'',
            email:'',
            mobile:'',
            cardNumber:'',
            cvs:'',
            amount:'',
            selectedOption:options

        }
        this.handlerChange =this.handlerChange.bind(this);
        this.Onchange =this.Onchange.bind(this);
    }

    handlerChange(e){
        this.setState({amount:e.value});
        alert(this.state.amount);
    }

    Onchange(e){
        const{name,value} = e.target;
        this.setState({[name]:value})
    }

    render() {

        return(
            <div>
            <div>
                <Header/>
                    <br></br>
                <h1>Payment Gateway </h1>

                </div>

            <div className='container'>


                <TextInput
                    name={"name"}
                    placeholder={"Enter Name"}
                    fieldValue={"Name"}
                    value={this.state.name}
                    onchange={this.Onchange}
                />
                <TextInput
                    name={"idNumber"}
                    placeholder={"idNumber"}
                    fieldValue={"idNumber"}
                    value={this.state.idNumber}
                    onchange={this.Onchange}
                />
                <TextInput
                    name={"email"}
                    placeholder={"Enter email"}
                    fieldValue={"email"}
                    value={this.state.email}
                    onchange={this.Onchange}
                />
                <TextInput
                    name={"mobile"}
                    placeholder={"mobile"}
                    fieldValue={"mobile"}
                    value={this.state.mobile}
                    onchange={this.Onchange}
                />
                <TextInput
                    name={"cvs"}
                    placeholder={"Enter cvs"}
                    fieldValue={"cvs"}
                    value={this.state.cvs}
                    onchange={this.Onchange}
                />
                <TextInput
                    name={"cardNumber"}
                    placeholder={"cardNumber"}
                    fieldValue={"cardNumber"}
                    value={this.state.cardNumber}
                    onchange={this.Onchange}
                />
                <TextInput
                    readonly
                    name={"amount"}
                    fieldValue={"Amount"}
                    value={this.state.amount}
                />

                <div>
                    <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                               Select the Appropriate User Type
                                    </span>
                    </div>
                    <Select
                        onChange={this.handlerChange}
                        options={this.state.selectedOption}
                    />
                </div>
                <br></br>
                <br></br>

            </div>
            </div>

        )

    }
}