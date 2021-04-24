import React, { useState } from 'react';
import { Row } from "../components/Grid/grid";
import { Input, TextArea, FormBtn } from "../components/Form/form";
import Wrapper from "../components/Wrapper";
import ThemeDropdown from "../components/ThemeHeader"
import themes from "../themes"


function CreateEntry() {


    const [theme, setTheme] = useState('');

    const handleChange = (selectedTheme) => {
        setTheme(themes[selectedTheme.value]);
    };
    const refCallback = (node) => {
        if (node) {
            theme &&
                Object.keys(theme).forEach((element) => {
                    node.style.setProperty(element, theme[element], 'important');
                    if (element === 'background-color' || element === 'background') {
                        // apply the same background mentioned for theme to the body of the website
                        document.body.style.background = theme[element];
                    }
                });
        }
    };
    return (
        <Wrapper>
            <div ref={refCallback}>
                <ThemeDropdown handleChange={handleChange} />
                <br></br><br></br>
                <div className="container">
                    <Row className="d-flex justify-content-center">
                        <div className="col-md-7 offset-md-2">
                            <form className="form-create">
                                <FormBtn>Save</FormBtn>
                                <Input
                                    // onChange={handleInputChange}
                                    name="title"
                                    placeholder="Title" />
                                <Input
                                    name="today's date goes here"
                                    placeholder="Today's Date" />
                                <TextArea
                                    name="entrycontent"
                                    placeholder="Jot it here" />
                            </form>
                        </div>
                    </Row>
                </div>
            </div>
        </Wrapper >
    )
}

export default CreateEntry;