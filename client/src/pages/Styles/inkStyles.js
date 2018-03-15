// INKStyles
import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import Jumbotron from "../../components/Jumbotron";
import InkStyles from "../../components/InkStyles";
import API from "../../utils/api";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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
            {/* <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="style"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
             */}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Tattoo Styles</h1>
            </Jumbotron>
            {this.state.inkStyles.length ? (
              <List>
                {this.state.inkStyles.map(style => (
                  <ListItem key={style._id}>
                    <Link to={"/inkStyles/" + style._id}>
                      <strong>
                        {style.title} by {style.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteInklingStyle(style._id)} />
                  </ListItem>
                ))}
              </List>
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
