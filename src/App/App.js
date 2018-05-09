import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className={"app"}>
                <div className={"grid-item item-1"}>Victor</div>
                <div className={"grid-item"}>Friberg's</div>
                <div className={"grid-item"}>playground</div>
                <div className={"grid-item"}>Fresh</div>
                <div className={"grid-item"}>Stuff</div>
                <img className={"grid-item"}
                     src={"https://upload.wikimedia.org/wikipedia/commons/6/66/Economist_Intelligence_Unit_Democracy_index.svg"}/>
            </div>
        );
    }
}

export default App;
