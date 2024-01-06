import React, { useState } from "react";

const Article = (props) => {

    const [item, setItem] = useState(props.item);

    return (
        <div>
            <p>{item.id} {item.title}</p>
        </div>
    );
};

export default Article;