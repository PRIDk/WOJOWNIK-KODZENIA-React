// console.log(React);
// console.log(ReactDOM);

const element = <div>Pierwszy element React</div>

const element2 = React.createElement(
  "div",
  null,
  "Pierwszy element React"
)

const element3 = (
  <div>
    <p>Tekst</p>
  </div>
)

const element4 = <div><p>Tekst</p></div> // to to samo tylko mniej przejrzyste

const element5 = (
  <div>
    <section></section>
    <section></section>
  </div>
)