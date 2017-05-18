// Import our SCSS
// import './styles.scss';

const message = "This is working?";

const things = [
    'one thing',
    'two thing',
    'three thing',
];

// Write our message to the dom
document.write(message);

// Go through our things
things.map((thing) => {
    console.log(thing);
});