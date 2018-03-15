import React, { Component } from "react";
import api from "../utils/api";
import Panel from "../components/Panel";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
// import { Input } from "client/src/components/Form";

class Client extends Component {
    state ={
        clientProfileInfo: [],
    };

    componentDidMount() {
        this.loadClient();
    }

    loadClient = () => {
        api.getClient()
        .then(res =>
            this.setState({clientProfileInfo: res.data})
        )
        .catch(err => console.log(err));
    };
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>Inkspired by:</h1>
                </Jumbotron>
                <form>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
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
                    Build an Inkling.
                  </FormBtn>
                </form>
              </Col>
              <Col size="md-6 sm-12">
                <Jumbotron>
                  <h1>Inklings</h1>
                </Jumbotron>
                {this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => {
                      return (
                        <ListItem key={book._id}>
                          <a href={"/books/" + book._id}>
                            <strong>
                              {book.title} by {book.author}
                            </strong>
                          </a>
                          <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                        </ListItem>
                      );
                    })}
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
    
    export default Books;