import * as React from 'react';
import {Text} from './C1';
// import FormLogin from './FormLogin';
// import {getCookie,setCookie} from './utils';

class Welcome extends React.Component<{},{firstname: string, lastname:string}>{
    constructor(props:string){
        super(props);
        this.state={
            firstname:'',
            lastname:''
        }
    }
    // public handleChange = (e:any) =>  {
    //     setCookie("firstname",this.state.firstname);
    //     alert(document.cookie);
    // }
    public render(){
        return(
            <div>
                
                <Text value={this.state.firstname} readonly = {true} />
            </div>
        ); 
    }
}
export default Welcome;