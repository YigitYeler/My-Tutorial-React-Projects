import React, { Component } from "react"

class Example extends Component {
    constructor(){
        super()
        this.state = {
            NameNumber : "Birinci Kişi",
            Name : "İsim: Yiğit",
            Future : "Gelecek: Naughty Dog Game Developer",
            Now : "Şuan: ReactJs İle Boğuşmaca"
        }
    }
    ChangeY = () => {
        this.setState({
            NameNumber : "Birinci Kişi",
            Name : "İsim: Yiğit",
            Future : "Gelecek: Naughty Dog Game Developer",
            Now : "Şuan: ReactJs İle Boğuşmaca"
        })
    }
    ChangeO = () => {
        this.setState({
            NameNumber : "İkinci Kişi",
            Name : "İsim: Ozan",
            Future : "Gelecek: Black Hat Hacker",
            Now : "Şuan: University Exam"
        })
    }
    ChangeB = () => {
        this.setState({
            NameNumber : "Üçüncü Kişi",
            Name : "İsim: Burak",
            Future : "Gelecek: Apple CEO",
            Now : "Şuan: Bomboş"
        })
    }

    render(){
        var {NameNumber,Name,Future,Now} = this.state;
        return(
            <div>
                <ul>
                    <header><h4>{NameNumber}</h4></header>
                    <li>{Name}</li>
                    <li>{Future}</li>
                    <li>{Now}</li>
                </ul>
                <button onClick={this.ChangeY}>Yiğit</button>
                <button onClick={this.ChangeO}>Ozan</button>
                <button onClick={this.ChangeB}>Burak</button>

            </div>
        )
    }
}

export default Example;