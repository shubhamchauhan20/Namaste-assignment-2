const create= document.createElement('h1');
console.log(create);
create.innerHTML="Hello from javascript";

const root= document.getElementById("root");

root.append(create);

const heading1= React.createElement('h1', {id: "title"}, 'heading1');

const heading2= React.createElement('h2', {id: "title2"}, "heading2");

const container = React.createElement("div", {id: "container"}, [heading1, heading2]);

// const root2= ReactDOM.CeateRoot(document.getElementById('root'));
const root2= ReactDOM.createRoot(document.getElementById('root'));

root2.render(container);
