const header = <h1 className="title">Witaj na stronie!</h1>

const classBig = "big";

const handleClick = () => alert("klik!")

const main = (
  <div className="red">
    <h1 onClick={handleClick}>Pierwszy artykuł</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti accusantium doloremque rem, sed facilis adipisci vero molestiae fugit aspernatur tempora provident earum non veritatis corrupti! Optio exercitationem minima sed?</p>
  </div>
)

const text = "stopkaaa"
const footer = (
  <footer>
    <p className={classBig}>{text}</p>
  </footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById("root"))