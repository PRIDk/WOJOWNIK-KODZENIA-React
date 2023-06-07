// komponent funkcyjny, bezstanowy (stateless) duża litera, zwracamy elementy React

const Header = () => {
  return  (
    <div>
      <h1>Witaj na stronie</h1>
    </div>
  )
}

// komponent klasowy, stanowy (stateful)

class Article extends React.Component { // Article dziedziczy od klasy Component z biblioteki React
  // state = {
  //   number: 0,
  // }
  
  render() {
    return (
      <section>
        <h2>Artykuł</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore in, voluptatem ullam, quos quo molestias ab sapiente fuga nobis porro ut iste distinctio at itaque aliquam deserunt nam odio?</p>
      </section>
    )
  }
}

// to jest komponent główny, ma w sobie zagniezdżone 2 komponenty
const App = () => {
  return (
    <div>
      <Header/>
      <Article></Article>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))