import React from "react";
import { Container, Row, Col } from "../components/Grid/grid";
import { Input, TextArea, FormBtn } from "../components/Form/form";
// import SideNav from "../components/SideNav";
import Side from "../components/Side/side";


function CreateEntry() {
    return (
        <div>

            {/* <Container> */}
            <Row>
                <Col size="md-3">
                    <Side />
                </Col>
                <Col size="md-6">
                    <form>
                        <FormBtn>Save</FormBtn>
                        <Input
                            // onChange={handleInputChange}
                            name="title"
                            placeholder="Title" />
                        <Input
                            name="dateCreated/Datenow()"
                            placeholder="Today's date/DateCreated" />
                        <TextArea
                            name="entrycontent"
                            placeholder="Jot it here" />
                    </form>
                </Col>
            </Row>

            {/* </Container> */}

        </div>
    )
}

export default CreateEntry;