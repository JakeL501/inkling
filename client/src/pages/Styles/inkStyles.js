// INKStyles
import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import InkStyles from "../../components/InkStyles";
import API from "../../utils/api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { ListItem } from "../../components/List";

class InklingStyles extends Component {
  state = {
    inklingStyles: [],
    style: "",
    img: "",
    des: "",

    // inkSpire: [],
    // savedInkSpire: [],
    // notes: "",
    // begin: "",
    // end: ""
  };


  componentDidMount() {
    this.loadInklingStyles();
  }

  loadInklingStyles = () => {
    API.getInklingStyles()
      .then(res =>
        this.setState({ inkStyles: res.data, style: "", img: "", des: "" })
      )
      .catch(err => console.log(err));
  };

  deleteInklingStyles = id => {
    API.deleteInkStyles(id)
      .then(res => this.loadInklingStyles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.style && this.state.author) {
      API.saveInklingStyles({
        style: this.state.style,
        img: this.state.img,
        des: this.state.des
      })
        .then(res => this.loadInklingStyles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Tattoo Styles</h1>
            </Jumbotron>
           
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Tattoo Styles</h1>
            </Jumbotron>
            {this.state.InklingStyles.length ? (
              <InkStyles>
                {this.state.InklingStyles.map(style => (
                  <ListItem key={style._id}>
                    <Link to={"/inkStyles/" + style._id}>
                      <strong>
                        {style.title} by {style.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteInklingStyle(style._id)} />
                  </ListItem>
                ))}
              </ InkStyles>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InkStyles;
