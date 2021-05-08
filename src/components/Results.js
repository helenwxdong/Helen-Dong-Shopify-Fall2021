import React from "react";
import Box from "@material-ui/core/Box";
import Result from "./Result";

export default class Results extends React.Component {
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
        <h2>Results</h2>
        <ul>
          {this.props.items.map((item) => (
            <Result
              title={item.Title}
              year={item.Year}
              nominated={item.Nominated}
              handleNomination = {this.props.handleNomination}
            />
          ))}
        </ul>
      </Box>
    );
  }
}

const ContainerStyling = {
  padding: "50px",
  borderRadius: "25px",
};
