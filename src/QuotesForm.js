import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
const QuotesForm = (props) => {
    const { formSubmission, id: slno, name: author, body: quote,handelToggle } = props
    const [id,setId]=useState(slno?slno:uuidv4())
    const [name, setName] = useState(author? author : '')
    const [body, setBody] = useState(quote ? quote : '')
    
    const handelSubmit = (e) => {

        e.preventDefault()
        const formData = {
            id:id,
            name: name,
            body:body
        }
        formSubmission(formData)
        
        if (handelToggle) {
            handelToggle()
        }
        setName('')
        setBody('')
        
    }

    const handelNameChange = (e) => {
        setName(e.target.value)
    }
    const handelBodyChange = (e) => {
        setBody(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <label className='form-label'>Name</label><br />
                <input className='form-control' type='text' value={name} onChange={handelNameChange} /><br />
                <label className='form-label'>Body</label><br/>
                <textarea className='form-control' value={body} onChange={handelBodyChange}></textarea><br/>
                <input className='btn btn-primary' type='submit' value='save'/>
            </form>
        </div>
    )
}

export default QuotesForm