import React from "react";
import MenuItem from "../menu-item/menu-item.component.jsx";
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';
const  Directory =({sections}) =>  
  (
      <div className="directory-menu">     
        {
          sections.map(({id, ...otherSectionProps}) =>(
            <MenuItem key={id} {...otherSectionProps}></MenuItem>
          ))
        }
      </div>
    );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);