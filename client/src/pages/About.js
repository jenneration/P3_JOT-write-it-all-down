import React from "react";
import { Container, Row, Col } from "../components/Grid/grid";
import mary from "../assets/mary.gif";
import arjun from "../assets/arjun.gif";
import menuka from "../assets/menuka.gif";
import jennerm from "../assets/jennerm.gif";

function About(props) {
    return (
        <div>
            <h1>theJAMM</h1>
            <br></br>
            <Container>
                <Row>
                    <Col size="md-3">
                        <img src={arjun} style={{ width: "300px" }} />
                    </Col>
                    <Col size="md-3">
                        <img src={menuka} style={{ width: "300px" }} />
                    </Col>
                    <Col size="md-3">
                        <img src={mary} style={{ width: "300px" }} />
                    </Col>
                    <Col size="md-3">
                        <img src={jennerm} style={{ width: "300px" }} />
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default About;