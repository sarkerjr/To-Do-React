import React from "react";

import classes from "./UserInput.module.css";

const userInput = (props) => {
    return (
        <div className={classes.Container}>
            <form className={classes.Container} onSubmit={props.submitEntry}>
                <label htmlFor="Input" className={classes.InputTextLabel}>
                    Enter an item:
                </label>
                <textarea
                    className={classes.InputText}
                    onChange={props.changedEntry}
                    value={props.value}
                    id="Input"
                    rows={2}
                    cols={40}
                ></textarea>
                <button className={classes.Button}>Add New</button>
            </form>
        </div>
    );
};

export default userInput;
