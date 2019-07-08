import React from 'react';
import {
    View,
    Panel
} from '@vkontakte/vkui';
import Catalog from '../panels/Catalog';
import Filters from '../panels/Filters';
import Bicycle from '../panels/Bicycle';
import { getBicycleById } from '../data/data';
import '@vkontakte/vkui/dist/vkui.css';

export default class CatalogContainer extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            activePanel: 'catalog',
            colors: [],
            types: [],
            bikeId: 0,
        }

    }

    goFilters = () => { this.setState({ activePanel: 'filters' }); }
    goCatalog = () => { this.setState({ activePanel: 'catalog' }); }
    onChangeColor = (color) => this.setState((prevState) => {
        const colors = prevState.colors;
        const index = colors.indexOf(color);
        if (~index) {
            colors.splice(index, 1)
        } else {
            colors.push(color);
        }
        return {
            colors
        }
    });

    onChangeType = (type) => this.setState((prevState) => {
        const types = prevState.types;
        const index = types.indexOf(type);
        if (~index) {
            types.splice(index, 1)
        } else {
            types.push(type);
        }
        return {
            types
        }
    });

    onChangePrice = (e) => this.setState((prevState) => {
        return {
            ...prevState,
            price: {
                min: e[0],
                max: e[1],
            },
        }
    });

    onItemSelect = (id) => {
        this.setState({
            activePanel: `bicycle${id}`,
            bikeId: id,
        });
    }

    render () {
        const { bikeId, price } = this.state;
        return (
            <View id={this.props.id} activePanel={this.state.activePanel}>
                <Panel id='catalog'>
                    <Catalog price={price} addToBasket={this.props.addToBasket} isInBasket={this.props.isInBasket} colors={this.state.colors} types={this.state.types} goFilters={this.goFilters} onItemSelect={this.onItemSelect} onChangeColor={this.onChangeColor} onChangeType={this.onChangeType} />
                </Panel>
                <Panel id='filters'>
                    <Filters price={price} colors={this.state.colors} types={this.state.types} goCatalog={this.goCatalog} onChangeColor={this.onChangeColor} onChangeType={this.onChangeType} onChangePrice={this.onChangePrice} />
                </Panel>
                <Panel id={`bicycle${bikeId}`}>
                    <Bicycle addToBasket={this.props.addToBasket} isInBasket={this.props.isInBasket} colors={this.state.colors} goCatalog={this.goCatalog} onChangeColor={this.onChangeColor} {...getBicycleById(bikeId)} />
                </Panel>
            </View>
        );
    }
}