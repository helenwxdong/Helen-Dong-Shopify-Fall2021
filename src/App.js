import { React, Component } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Nominations from "./components/Nominations";
import Grid from "@material-ui/core/Grid";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      nominations: [],
      loaded: false,
      searchVal: "",
      displayBanner: false,
    };
  }

  // handleSubmit handles the event where the user submits their search
  handleSubmit(event) {
    event.preventDefault();
    var url = requestURL + this.state.searchVal;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
        });

        this.setItems(result.Search);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // handleChange handles the changing of the user's search text
  handleChange(event) {
    this.setState({ searchVal: event.target.value });
  }

  // setItems iterates through results to extract the relevant fields to
  // insert into this.state.items
  setItems(result) {
    var items = [];
    for (var movie of result) {
      var title = movie.Title;
      var year = movie.Year;
      var nominated = false;
      for (var nom of this.state.nominations) {
        if (nom.Title == title) {
          nominated = true;
        }
      }
      items.push({
        Title: title,
        Year: year,
        Nominated: nominated,
      });
    }
    this.setState({
      items: items,
    });
  }

  // handleNomination handles when a user nominates a film
  handleNomination(title, year) {
    var nominations = this.state.nominations;
    nominations.push({ Title: title, Year: year });
    this.setState({
      nominations: nominations,
    });
    if (this.state.nominations.length >= 5) {
      this.setState({
        displayBanner: true,
      });
    }
    this.setItems(this.state.items);
  }

  // handleDeNominations handles when a user removes a nomination
  async handleDeNomination(title, year) {
    var nominations = [];
    for (var nom of this.state.nominations) {
      if (nom.Title != title) {
        nominations.push(nom);
      }
    }
    await this.setState({
      nominations: nominations,
    });
    console.log(this.state.nominations);
    this.setItems(this.state.items);
    if (this.state.nominations.length < 5) {
      this.setState({
        displayBanner: false,
      });
    }
  }

  render() {
    return (
      <div style={{ padding: "50px" }}>
        <h1>The Shoppies</h1>
        {this.state.displayBanner && <h3>You have 5 nominations!</h3>}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Search
              setItems={this.handleSubmit.bind(this)}
              handleChange={this.handleChange.bind(this)}
            />
          </Grid>
          <Grid item xs={6}>
            <Results
              items={this.state.items}
              handleNomination={this.handleNomination.bind(this)}
            />
          </Grid>
          <Grid item xs={6}>
            <Nominations
              nominations={this.state.nominations}
              handleDeNomination={this.handleDeNomination.bind(this)}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

var requestURL = "http://www.omdbapi.com/?i=tt3896198&apikey=a6780df2&s=";
