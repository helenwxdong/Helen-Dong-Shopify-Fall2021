import React from "react";
import Box from "@material-ui/core/Box";
import Nomination from "./Nomination";

export default class Nominations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={ContainerStyling}
      >
        <h2>Nominations</h2>
        {this.props.nominations.map((item) => (
          <Nomination
            title={item.Title}
            year={item.Year}
            handleDeNomination={this.props.handleDeNomination}
          />
        ))}
      </Box>
    );
  }
}

const ContainerStyling = {
  padding: "50px",
  borderRadius: "25px",
};
