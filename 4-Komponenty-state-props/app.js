class ShoppingList extends React.Component {
  state = { // właściwość state (instancja)
    items1: "Ogórki",
    items2: "Sok",
    items3: "coś do picia",
  }

  render() {
    return (
      <>
        <h1>Lista zakupów:</h1>
        <ul>
          <ItemList name={this.state.items1} example = {4}/>
          <ItemList name={this.state.items2} />
          <ItemList name={this.state.items3} />
        </ul>
      </>
    )
  }
}

// const ItemList = (props) => {
//   return (
//     <li>{props.name}, {props.dupa}</li>
//   )
// }

class ItemList extends React.Component {
  render() {
    return (
      <li>{this.props.name} - {this.props.example}</li>
    )
  }
}

ReactDOM.render(<ShoppingList/>, document.getElementById("root"))