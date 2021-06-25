import React from "react";
import MenuItem from "../menu-item/menu-item.component" 
import './directory.styles.scss';
import sections from "./directory.data"

class Directory extends React.Component{
    constructor(){
        super()
        
        this.state = {
            data: sections
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.data.map( ({id, ...otherDataProps}) => (
                        <MenuItem key={id} {...otherDataProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;