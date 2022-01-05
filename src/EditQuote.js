import React from "react";
import QuotesForm from "./QuotesForm";

const EditQuote = (props) => {
    const { id, name, body,editItem,handelToggle } = props
    
    const formSubmission = (formData) => {
        editItem(formData)
    }
    return (
        <div>
            <h3>edit quote</h3>
            <QuotesForm id={id} name={name} body={body} formSubmission={formSubmission} handelToggle={ handelToggle}/>
        </div>
    )
}

export default EditQuote