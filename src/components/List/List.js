import React from "react";

import Aux from "../../hoc/Auxiliary";
import classes from "./List.module.css";

const list = (props) => {
    if (props.items === null) return null;

    return (
        <Aux>
            {props.items.map((item) => (
                <div
                    className={classes.ItemContainer}
                    key={item.key}
                    id={item.key}
                    onClick={() => props.deleted(item)}
                >
                    <p className={classes.ItemBody}>{item.body}</p>
                </div>
            ))}
        </Aux>
    );
};

export default list;
