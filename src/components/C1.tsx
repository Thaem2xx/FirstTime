import * as React from "react";

interface Props  { 
    value?:string
    readonly?:true|false
    label?:string
} 

export const  Text = (props:Props) => {
    return(
        <>  
            <span>{props.label}</span>
            <span>{props.value}</span>
            readonly = {props.readonly}
        </>
    );
}

 