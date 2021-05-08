import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      searchVal: "",
      items: [],
    };
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
        <form onSubmit={this.props.setItems}>
          <TextField
            style={BarStyling}
            id="outlined-basic"
            label="Movie Title"
            variant="outlined"
            onChange={this.props.handleChange}
          />
        </form>
      </Box>
    );
  }
}

const BarStyling = {
  width: "100%",
};

const ContainerStyling = {
  padding: "50px",
  borderRadius: "25px",
};
