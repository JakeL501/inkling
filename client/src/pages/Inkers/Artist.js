import React, { Component } from "react";
import api from "../../utils/api";
import Jumbotron from "../../components/Jumbotron";

import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

// import { Input } from "client/src/components/Form";

class Artist extends Component {
    state ={
        artistProfileInfo: [],
    };

    componentDidMount() {
        this.loadArtist();
    }

    loadArtist = () => {
        api.getArtist()
        .then(res =>
            this.setState({artistProfileInfo: res.data})
        )
        .catch(err => console.log(err));
    };
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>What Books Should I Read?</h1>
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
                    Submit Book
                  </FormBtn>
                </form>
              </Col>
              <Col size="md-6 sm-12">
                <Jumbotron>
                  <h1>Books On My List</h1>
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
    
    export default Artist;
