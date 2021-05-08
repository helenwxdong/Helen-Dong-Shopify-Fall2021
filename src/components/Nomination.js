import React from "react";
import Button from "@material-ui/core/Button";

export default class Nomination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <li style={{ paddingTop: "20px" }}>
          {this.props.title + " (" + this.props.year + ") "}
          <Button
            variant="outlined"
            onClick={() =>
              this.props.handleDeNomination(this.props.title, this.props.year)
            }
          >
            Remove
          </Button>
        </li>
      </div>
    );
  }
}
