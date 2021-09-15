import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { directorySelector } from "../../redux/directory/directory-selector";

import styled from "styled-components";

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = ({ directory }) => {
  return (
    <DirectoryMenu>
      {directory.map(({ id, ...otherDataProps }) => (
        <MenuItem key={id} {...otherDataProps} />
      ))}
    </DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: directorySelector,
});

export default connect(mapStateToProps)(Directory);
