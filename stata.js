function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="shiruitao" />;

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}
ReactDOM.render(
  <HelloMessage name="myself" />,
  mountNode
);

// ----------------------------------------------
function child(props) {
  return <h1>Hello, {props.neme}</h1>;
}

function parent() {
  return (<h1>
    <child name="world" />
  </h1>)
}

ReactDOM.render(
  parent,
  document.getElementById('root')
);


// ----------------------------------------------
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'shi',
  lastName: 'ruitao',
};

const element = (
  <h1>
    hello, {formatName(user)}!
  </h1>
);

ReactDOM .render(
  element,
  document.getElementById('root')
)


// ----------------------------------------------
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

// ----------------------------------------------
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

// ----------------------------------------------
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// ----------------------------------------------
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);