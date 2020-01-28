import React from 'react';
import './App.css';
import Mainsearchinput from './Components/common/main-search-input';
import CategoryContainer from './containers/category/category-container';
import { SEARCH_PLACEHOLDER } from './constants';
import Collectioncontainer from './containers/collection/collection-container';


class App extends React.Component {

  state = {
    activePlaceholderIndex: 0
  }

  componentDidMount() {
    setInterval(() => this.handlePlaceholderChange(), 3000)
  }

  handlePlaceholderChange = () => {
    this.setState(ps => ({ activePlaceholderIndex: ps.activePlaceholderIndex + 1 === SEARCH_PLACEHOLDER.length ? 0 : ps.activePlaceholderIndex + 1 }))
  }

  render() {

    const { activePlaceholderIndex } = this.state

    const currentPlaceholder = `Search collections of ${SEARCH_PLACEHOLDER[activePlaceholderIndex]}`
    return (
      <div className="app-container">
        <div className="row" style={{ padding: '24px', backgroundColor: 'white' }}>
          <Mainsearchinput placeholder={currentPlaceholder} />
        </div>
        <div class="row">
          <div class="col-2">
            <CategoryContainer />
          </div>
          <div class="col-10">
            <Collectioncontainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
