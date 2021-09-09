import React from "react";
import MenuItem from "../menu-item/menu-item.component" 
import './directory.styles.scss';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { directorySelector } from "../../redux/directory/directory-selector";

const Directory = ({directory}) => {
    return(
        <div className="directory-menu">
            {
                directory.map( ({id, ...otherDataProps}) => (
                    <MenuItem key={id} {...otherDataProps}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    directory: directorySelector
})

export default connect(mapStateToProps)(Directory);