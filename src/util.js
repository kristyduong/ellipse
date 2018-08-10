class Rows extends Component {
  render() {
    return (
      <div className="main">
        {this.renderTiles(this.props.size, this.props.categories, this.props.icons, this.props.colnum)}
      </div>
    );
  }

  renderTiles(size, categories, icons, colnum) {
    var rows = [];
    var row = [];
    for (let i = 0; i < categories.length; i++) {
      row.push(<Tile category={categories[i]} icon={icons[i]} size={size}/>);
      if (row.length === colnum) {
        rows.push(<div className="tile-row">{row}</div>);
        row = [];
      }
    }
    rows.push(<div className="tile-row">{row}</div>);
    return rows;
  }
}

class Tile extends Component {
  render() {
    return (
      <Link to={"/" + this.props.category.toLowerCase()} className={"tile-" + this.props.size}>
      
        <i className={this.props.icon + " " + this.props.size}></i>
        <div className="text">{this.props.category}</div>
      
      </Link>
    );
  }
}