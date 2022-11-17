import { SearchBar } from 'react-native-elements';

export default class Buscador extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Escribe aqui..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}