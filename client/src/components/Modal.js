import React, {useState} from "react";
import ThemeDropdown from "./ThemeDropdown"
import themes from "../themes"

const Modal = () => {

    const [theme, setTheme] = useState('');

    const handleChange = (selectedTheme) => {
      setTheme(themes[selectedTheme.value]);
    };
  
    const refCallback = (node) => {
      if (node) {
        theme &&
          Object.keys(theme).forEach((element) => {
            node.style.setProperty(element, theme[element], 'important');
            // if (element=== 'background') {
            if (element === 'background-image' 
            || element === 'background'
            ) 
            {
              // apply the same background mentioned for theme to the body of the website
              document.body.style.background = theme[element];
            }
          });
      }
    };

    return(

        <div classNameName="modal">
<button type="button" className="btn" style={{borderRadius:"5px", background:"black", color:"white"}} data-toggle="modal" data-target="#exampleModalCenter">
 Theme Selector
</button>


<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Select your theme</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body"> 
      <div ref={refCallback} className="main-section">
        <ThemeDropdown handleChange={handleChange} />
        
      </div>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
</div>







   


    )
}

export default Modal; 