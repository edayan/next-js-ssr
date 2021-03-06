import React from 'react';
import './index.css';
import Card from './Card';
import { bindActionCreators } from 'redux'
import { initialCards, addItem, initStore } from '../store';
import withRedux from 'next-redux-wrapper';

class Index extends React.Component {

    static async getInitialProps({ store }) {
        store.dispatch(initialCards())
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <img src="/static/logo.png" className="static-logo" alt="logo" />
            </header>
            <div className="Grid">
                {this.props.cards.map(card => <Card key={card.id} />)}
            </div>
        </div>
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        initialCards: bindActionCreators(initialCards, dispatch),
        addItem: bindActionCreators(addItem, dispatch),
    }
}

const mapStateToProps = state => {
    console.log(state.cards)
    return {
        cards: state.cards
    }
}
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);