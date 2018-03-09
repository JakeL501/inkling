import React, { Component } from "react";
import api from "../utils/api";
import Panel from "/components/Panel";
// import Footer  from "../components/Footer";
// import Jumbotron   from "components/Jumbotron";
// import Navbar from "components/Navbar";
import { Input } from "../components/Form";
import { Container } from "../components/Grid";
import { Row } from "../components/Grid";
import { Col } from "../components/Grid";


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
            <Container>
                <Row>
                    <Col size="md-6">
                        {/* <Jumbotron>
                            <h1></h1>
                        </Jumbotron> */}
                        <form>
                            <Input
                            />
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
