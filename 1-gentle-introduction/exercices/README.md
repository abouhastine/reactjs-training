## Exerice 2
``` JavaScript
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  React.createElement(
    "div",
    null,
    "Main title",
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement("div", null, "First form"),
    React.createElement("input", null),
    React.createElement("br", null),
    React.createElement("button", { type: "reset" }, "reset"),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement("div", null, "Second form"),
    React.createElement("input", null),
    React.createElement("br", null),
    React.createElement("button", { type: "reset" }, "reset"),
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement("button", { type: "submit" }, "submit"),
    React.createElement("button", { type: "reset" }, "cancel")
  ),
  document.getElementById("app")
);
```
## Exerice 3
``` JavaScript
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    <p>Main title</p>
    <p>First form</p>
    <input type="text" />
    <input type="reset" value="reset"/>
    <br />
    <p>Second form</p>
    <input type="text" />
    <input type="reset" value="reset"/>
    <br /> <br />
    <input type="submit" value="submit"/>
    <input type="reset" value="cancel"/>
  </div>,
  document.getElementById("app")
);
```
## Exerice 4
``` JavaScript
import React from 'react'
import ReactDOM from 'react-dom'

function SimpleInput() {
  return (
    <React.Fragment>
      <input />
      <button type="reset">reset</button>
    </React.Fragment>
  );
}

function Buttons() {
  return (
    <React.Fragment>
      <button type="submit">submit</button>
      <button type="reset">reset</button>
    </React.Fragment>
  );
}

function SimpleForm() {
  return (
    <div>
      Simple Form
      <SimpleInput />
    </div>
  );
}

function MyPage() {
  return (
    <div>
      Main title
      <SimpleForm />
      <SimpleForm />
      <Buttons />
    </div>
  );
}

const mountPoint = document.getElementById("app");

ReactDOM.render(<MyPage />, mountPoint);
```
## Exerice 5
``` JavaScript
import React from 'react'
import ReactDOM from 'react-dom'

function SimpleInput() {
  return (
    <React.Fragment>
      <input />
      <button type="reset">reset</button>
    </React.Fragment>
  );
}

function Buttons(props) {
  const { submit, reset } = props;
  return (
    <React.Fragment>
      <button type="submit">{submit}</button>
      <button type="reset">{reset}</button>
    </React.Fragment>
  );
}

function SimpleForm(props) {
  const { title } = props;
  return (
    <div>
      {title}
      <SimpleInput />
    </div>
  );
}

function MyPage(props) {
  const { title } = props;
  return (
    <div>
      {title}
      <SimpleForm title="Simple form 1" />
      <SimpleForm title="Simple form 2" />
      <Buttons submit="submit" reset="cancel" />
    </div>
  );
}

const mountPoint = document.getElementById("app");

ReactDOM.render(<MyPage title="Main title" />, mountPoint);
```
## Exerice 6
``` JavaScript
import React from 'react'
import ReactDOM from 'react-dom'

class FormSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      counter: 0
    };
  }

  render() {
    return <div>
    <p>Main title</p>
    <p>First form</p>
    <input type="text" />
    <input type="reset" value="reset"/>
    <br />
    <p>Second form</p>
    <input type="text" />
    <input type="reset" value="reset"/>
    <br /> <br />
    <input type="submit" value="submit"/>
    <input type="reset" value="cancel"/>
  </div>;
  }
}

const mountPoint = document.getElementById("app");

ReactDOM.render(<FormSimple subject="React"/>, mountPoint);
```
## Exerice 7
``` JavaScript
import React from 'react'
import ReactDOM from 'react-dom'

class FormSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstField: "",
      secondField: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReset() {
    this.setState({ firstField: "", secondField: "" });
  }

  handleSubmit() {
    console.log(this.state.firstField);
    console.log(this.state.secondField);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <p>Main title</p>
        <p>First form</p>
        <input
          type="text"
          name="firstField"
          value={this.state.firstField}
          onChange={this.handleInputChange}
        />
        <input type="reset" value="reset" onClick={this.handleReset} />
        <br />
        <p>Second form</p>
        <input
          type="text"
          name="secondField"
          value={this.state.secondField}
          onChange={this.handleInputChange}
        />
        <input type="reset" value="reset" onClick={this.handleReset} />
        <br /> <br />
        <input type="submit" value="submit" onClick={this.handleSubmit} />
        <input type="reset" value="cancel" onClick={this.handleReset} />
      </div>
    );
  }
}

const mountPoint = document.getElementById("app");

ReactDOM.render(<FormSimple subject="React" />, mountPoint);
```