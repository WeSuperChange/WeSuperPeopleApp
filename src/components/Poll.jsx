import React from "react";

const Poll = (props) => {
    return (
        <div>
            <div hidden={true}>{props.id}</div>
            <div>{props.category}</div>
            <h3>{props.question}</h3>
        </div>
    );
};

export default Poll;
