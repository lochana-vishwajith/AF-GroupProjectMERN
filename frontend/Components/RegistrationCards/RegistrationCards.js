import React,{Component} from 'react'
import Button from "../ButtonComponent/buttonComponent";
import Header from "../HeaderComponent/header"
export default class RegistrationCards extends Component{
    constructor(props) {
        super(props);

    this.userRegistration = this.userRegistration.bind(this);
    this.attendeeRegistration =this.attendeeRegistration.bind(this);
    }


    userRegistration(e){
        e.preventDefault()

        window.location = '/uRegistration'
    }


    attendeeRegistration(e){
        e.preventDefault()
        window.location = '/aRegistration'
    }

    render() {
        return(
            <div>
                    <div>
                        <Header/>
                    </div>
                <div>
                    <h1>Registration According to Your Needs</h1>
                </div>

                <div className="card">
                    <div className="card-body">
                        <Button
                            type ={"submit"}
                            classname={"btn btn-primary"}
                            value={"Host Registration"}
                            onsubmit={this.userRegistration}
                        />
                    </div>
                </div>


                <div className="card">
                    <div className="card-body">
                        <Button
                            type ={"submit"}
                            classname={"btn btn-primary"}
                            value={"Attendee Registration"}
                            onsubmit={this.attendeeRegistration}
                        />
                    </div>
                </div>


            </div>

        )


    }


}