import React,{useState} from "react";
import EditQuote from "./EditQuote";

const QuotesItem = (props) => {
    const { id, name, body, removeItem,editItem } = props
    const [toggle, setToggle] = useState(false)
    
    const handelRemove = () => {
        const confirmRemove = window.confirm('Are you sure?')
        if (confirmRemove) {
            removeItem(id)
        }
    }

    const handelToggle = () => {
        const result = !toggle
        setToggle(result)
    }

    return (
        <div>
            {toggle ? (
                <div>
                    <EditQuote id={id} name={name}
                        body={body} editItem={editItem}
                        handelToggle={handelToggle}
                    />
                    <div>
                        <button className='btn btn-danger px-2 mt-1'
                        onClick={handelToggle}>cancel</button>
                    </div> 
                </div>) : (
                    <div className='mt-3'>
                        <figure>
                            <blockquote className='blockquote'>{body}</blockquote>
                            <figcaptio className='blockquote-footer mb-2'><cite>{name}</cite> </figcaptio>
                        </figure>
                        
                        <div className='d-grid gap-2 d-md-block'>
                        <button className='btn btn-primary mx-2' onClick={ handelToggle}>edit</button>
                        <button className='btn btn-danger mx-2' onClick={handelRemove}>remove</button>
                    </div>
                </div>
            )}
            
        </div>
    )
}
export default QuotesItem