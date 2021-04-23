import React, { Component } from "react"

class Live extends Component {
    state = {
        isim : "İsim: ",
        gelecek : "Gelecek: ",
        ima : "Şimdi: "
    }
    name = () => {
        var text1 = document.getElementById("text1"); 
        this.setState({
             isim : "İsim: "  + text1.value
         })   
    }
    mirai = () => {
        var text2 = document.getElementById("text2");
        this.setState({
            gelecek : "Gelecek: " + text2.value
        })
    }
    suan = () => {
        var text3 = document.getElementById("text3");
        this.setState({
            ima : "Şimdi: " + text3.value
        })
    }
    render(){
        const {isim,gelecek,ima} = this.state;
        return(
            <div>
                <ul>
                    <h5>İsim:</h5> <input id="text1" onChange={this.name}></input>  <br/>
                    <h5>Gelecek:</h5> <input id="text2" onChange={this.mirai}></input>  <br/>
                    <h5>Şimdi:</h5> <input id="text3" onChange={this.suan}></input> 
                </ul>
                <ul>
                    <header>{this.props.children}</header>
                    <li>{isim}</li>
                    <li>{gelecek}</li>
                    <li>{ima}</li>
                </ul>
            </div>

        )

    }
}

export default Live