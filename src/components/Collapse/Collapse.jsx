import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

const angleDown = <FontAwesomeIcon icon={faChevronDown} />;
const angleUp = <FontAwesomeIcon icon={faChevronUp} />;

function Collapse(props) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }
 
  return (
    <>
      {/* {console.log(open)}  */}
        <div onClick={toggle} className="collapse">
          <h2 className="collapse_title">{props.label}</h2>
          {open ? (
            <i className="collapse_icon">{angleDown}</i>
          ) : (
            <i className="collapse_icon">{angleUp}</i>
          )}
        </div>
        {open && <div className="collapse_content">{props.content}</div>}
      
    </>
  );
}

export default Collapse;
