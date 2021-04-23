import React , {Component} from "react"
import * as firebase from "firebase"

class Notes extends Component {
    constructor(props){
        super(props);
        
        this.state={
            baslık : "",
            not : "",
            notlar : []
        }
    }
    componentDidMount =()=> {
        this.db = firebase.database();

        this.listenForChange();
        //console.log(this.db.ref("Notlar").on("child", snapshot => {snapshot.val().Başlık})
    }

    listenForChange =() =>{
        this.db.ref("Notlar").on("child_added" , snapshot => {
            let not={
                id : snapshot.key,
                baslık : snapshot.val().Başlık,
                not : snapshot.val().Not
            }
            let notlar = this.state.notlar;
            notlar.push(not);

             this.setState({
                 notlar : notlar
             })
        })
        this.db.ref("Notlar").on("child_removed" , snapshot =>{
            this.state.notlar=this.state.notlar.filter(not=> not.id !==snapshot.key)
            this.setState({
                notlar: this.state.notlar
            })
            
        })
    }

    onChangeHandler(evt, key){
        this.setState({
            [key] : evt.target.value
        })
        console.log(this.state.not)
    }
    createNote = () =>{
        if(this.state.baslık !== "" && this.state.not !==""){
            firebase.database().ref("Notlar").push({
                Başlık: this.state.baslık,
                Not: this.state.not
            })
        }
    }

    notSil = (id) =>{
        firebase.database().ref("Notlar").child(id).remove();
        
    }
    render(){
        
        
        return(
            <div className="container">
                
                <div style={{width:"1080px",right:"10%"}}><h1 style={{textAlign:"center",fontFamily:"Forte",color:"white",fontWeight:"700"}}>NOTLARIM</h1></div>
                
                <div style={{textAlign:"center"}}>
                    <label style={{fontFamily:"Forte",fontSize:"40px",color:"white"}}>Başlık</label> <br/>
                    
                    <input style={{
                        border:"0",
                        background:"none",
                        backgroundColor:"black",
                        display:"block",
                        margin:"auto",
                        textAlign:"center",
                        border:"2px solid #3498db",
                        padding:"14px 10px",
                        width:"200px",
                        outline:"none",
                        color:"yellow",
                        borderRadius:"24px",
                        transition:"0.25s"
                    }} value={this.state.baslık} onChange={(evt)=> this.onChangeHandler(evt, "baslık")}/> <br/> <br/>
                    
                    <label style={{fontFamily:"Forte",fontSize:"40px",color:"white"}}>Not</label><br/>
                    
                    <textarea style={{
                        border:"0",
                        background:"none",
                        backgroundColor:"black",
                        display:"block",
                        margin:"auto",
                        textAlign:"center",
                        border:"2px solid #3498db",
                        padding:"14px 10px",
                        width:"500px",
                        outline:"none",
                        color:"yellow",
                        borderRadius:"24px",
                        transition:"0.25s",
                        height:"200px"}}
                         value={this.state.not} onChange={(evt)=> this.onChangeHandler(evt, "not")}/> <br/>
                    
                    <button style={{border:"0",
                        background:"none",
                        backgroundColor:"black",
                        display:"block",
                        margin:"auto",
                        textAlign:"center",
                        border:"2px solid #3498db",
                        padding:"14px 10px",
                        width:"150px",
                        outline:"none",
                        color:"yellow",
                        borderRadius:"24px",
                        transition:"0.25s",
                        height:"50px"}} onClick={this.createNote}>Not Oluştur</button>

                </div>
                 <br/>
                <div className="notlar">
                    <div><h3 style={{color:"yellow"}}>NOTLAR</h3></div> <br/>
                        <div> {this.state.notlar.map(not => (
                            <ul key={not.id}>
                                <header><h3 style={{color:"white"}} >{not.baslık} <h5 onClick={()=> this.notSil(not.id)} style={{color:"red", cursor:"pointer",position:"right"}}>SİL</h5></h3></header>
                                <li style={{color:"white"}}>{not.not}</li>

                            </ul>
                        ))}</div>

                </div>
                
            </div>
            
        )
    }
}
export default Notes 