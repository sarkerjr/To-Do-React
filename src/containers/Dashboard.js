import React, { Component } from "react";

import classes from "./Dashboard.module.css";

import UserInput from "../components/UserInput/UserInput";
import List from "../components/List/List";

class Dashboard extends Component {
    state = {
        userInput: "",
    };

    userEntrySubmitted = (event) => {
        event.preventDefault();

        if (this.state.userInput === "") return;

        if (localStorage.getItem("todo_storage") === null)
            localStorage.setItem("todo_storage", JSON.stringify([]));

        const item = {
            key: Date.now(),
            body: this.state.userInput,
        };

        const oldItems = localStorage.getItem("todo_storage");
        const Obj = JSON.parse(oldItems);
        Obj.push(item);
        localStorage.setItem("todo_storage", JSON.stringify(Obj));

        this.setState({
            userInput: "",
        });
    };

    onEntryChange = (event) => {
        this.setState({
            userInput: event.target.value,
        });
    };

    onDeleteHandler = (item) => {
        const oldItems = localStorage.getItem("todo_storage");
        const Object = JSON.parse(oldItems);

        const newObject = Object.filter((obj) => obj.key !== item.key);

        localStorage.setItem("todo_storage", JSON.stringify(newObject));

        this.forceUpdate();
    };

    render() {
        const oldItems = localStorage.getItem("todo_storage");
        const Obj = JSON.parse(oldItems);

        return (
            <div className={classes.Background}>
                <div className={classes.Container}>
                    <UserInput
                        submitEntry={this.userEntrySubmitted}
                        changedEntry={this.onEntryChange}
                        value={this.state.userInput}
                    />
                    <List items={Obj} deleted={this.onDeleteHandler} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
