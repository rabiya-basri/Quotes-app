import React from "react";
import QuotesItem from "./QuotesItem";

const QuotesList = (props) => {
    const { quotes, removeItem, editItem } = props
    
    return (
        <div>
            {quotes.length === 0 ? (
                <div>
                    <h1>No Quotes found</h1>
                    <p>Add new Quotes</p>
                </div>
            ) : (
                <div>
                        <h1>My Quotes - {quotes.length}</h1>
                        <div>
                        {quotes.map((quote) => {
                            return (
                                
                                <QuotesItem 
                                    key={quote.id} {...quote}
                                    removeItem={removeItem}
                                    editItem={editItem}
                                />
                            )
                        })}
                      </div>  
                </div>
            )}
        </div>
    )
}
export default QuotesList