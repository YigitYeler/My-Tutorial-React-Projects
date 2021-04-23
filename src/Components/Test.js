import React, {Component} from 'react';

class Selam extends Component {
    state = {
        Kişiler : []
    }
    ekle = () => {
        var arr = this.state.Kişiler
        var textn = document.getElementById("textn")
        arr.push(textn.value)
        textn.value=""
        this.setState({Kişiler : arr})
        console.log(this.state.Kişiler)
    }
 
   
    render(){
        var {Kişiler} = this.state
        const items = Kişiler.map((kişi,id) => <li key={id}>{kişi}</li>)
        return (
                <div>
                <input id="textn"></input>
                <button onClick={this.ekle}>Kişi Ekle</button>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
} 
export default Selam;