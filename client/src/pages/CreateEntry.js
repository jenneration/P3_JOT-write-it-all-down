import React, {useState} from 'react';
import {  Row, Col } from "../components/Grid/grid";
import { Input, TextArea, FormBtn } from "../components/Form/form";
// import SideNav from "../components/SideNav";
import Side from "../components/Side/side";
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
			  if (element === 'background-color' || element === 'background' ) {
				// apply the same background mentioned for theme to the body of the website
				document.body.style.background = theme[element];
			  }
			});
		}
	  };
    return (


        
            <div ref={refCallback}>
            <ThemeDropdown handleChange={handleChange} />
            <br></br><br></br>

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


        </div>
    )
}

export default CreateEntry;