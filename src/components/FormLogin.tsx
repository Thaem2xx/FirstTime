import * as React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './utils';
import { setCookie,getCookie } from './utils';
interface LoginState{
    name:string[],
    value: string,
    password:string,
    rememberMe:true|false,
}
class Formlogin extends React.Component<{},LoginState>{
    constructor(props:any)
    {   
        super(props);
        this.state ={
            name: ["Thiem","Cao","Hoang"],
            value : getCookie("expense") as string,
            password:'',
            rememberMe:false
        }
    }
    public renderOption(name: string[]):React.ReactNode{
        console.log(name);
        const result = name.map((value:string)=>{
            return (
                <option key={value+Math.random()*1000} >{value}{console.log(value+Math.random()*1000)}</option>
            );
        })
        return result;  
    }
    public render(){
        const inform = {
            value:'',
            password:''
        }
        return(
            <>
                <div className="form-group middle">
                <input type="text" name="" className="form-control" placeholder="Enter your name here" 
                 aria-describedby="helpId"  onChange={e=>
                    {
                        inform.value=(e.target.value) ;
                        console.log(inform.value)
                    }}
                 />
                 <small id="input1" className="text-muted text-red">Name should meaning</small>
                <input type="text" name="" className="form-control" placeholder="Enter your password here" aria-describedby="helpId"/>
                <small id="input2" className="text-muted text-red">Password should your name</small>
                <select className="form-control form-control" onChange={e=>setCookie("expense",e.target.value)}  >
                    {this.renderOption(this.state.name)}
                </select>
                <button className="btn btn-primary" onClick={e=>this.onSaveNamePerson(inform.value)}>Save</button>
                {console.log(this.state.value)}
                </div>
            </>
        );
    }
    public getInputName(): string {
        return name;
    }
    public onSaveNamePerson(value: string){
        value = value.trim();
        const name: string[] = [value,...this.state.name];
        this.setState({value,name});
        console.log(this.state.value);
    }
    public validate(value:string): boolean{
        if(value.length===0) return false;
        if(value.trim().length===0) return false;
        return true;
    } 
}
export default Formlogin;