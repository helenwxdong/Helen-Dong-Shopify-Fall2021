import React from "react";
import Button from "@material-ui/core/Button";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li style={{ paddingTop: "20px" }}>
          {this.props.title + " (" + this.props.year + ") "}
          {this.props.nominated && (
            <Button variant="outlined" disabled>
              Nominate
            </Button>
          )}
          {!this.props.nominated && (
            <Button
              variant="outlined"
              onClick={() => {
                this.props.handleNomination(this.props.title, this.props.year);
              }}
            >
              Nominate
            </Button>
          )}
        </li>
      </div>
    );
  }
}
