// const div=document.getElementById("root");
// const h1=document.createElement("h1");
// h1.innerText="Welcome to the react";
// div.appendChild(h1);

// const div = document.getElementById("root");

// const h1 = document.createElement("h1");

// h1.innerText = "Welcome to the fsd class !!";

// div.append(h1);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const h1 = React.createElement("h1",{}, "Welcome to the FSD class.!!");
// root.render(h1);


const root = ReactDOM.createRoot(document.getElementById("root"));
const div = [React.createElement("div",{},
    React.createElement("div",{},
        React.createElement("span",{},"Content-01")
    )),
    React.createElement("div",{},
    React.createElement("div",{},
        React.createElement("span",{},"Content-02")
    ))];
root.render(div);