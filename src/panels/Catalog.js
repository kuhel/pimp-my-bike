import React from 'react';
import { Div, Group, HeaderButton, List, PanelHeader, Search } from '@vkontakte/vkui';
import { getLang } from '../utils/dict';
import { bicycles } from '../data/data';
import BicycleCard from '../components/BicycleCard';
import Icon24Filter from '@vkontakte/icons/dist/24/filter';
import Icon16Clear from '@vkontakte/icons/dist/16/clear';
import './Catalog.css';

export default class Catalog extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    onChange = (search) => { this.setState({ search }); }

    get bicycles () {
        const search = this.state.search.toLowerCase();
        const { colors, types, price } = this.props;
        let filteredBicycles = [ ...bicycles ];
        if (colors && colors.length > 0) {
            filteredBicycles = filteredBicycles.filter(({ color }) => {
                return colors.indexOf(color) > -1
            });
        }
        if (types && types.length > 0) {
            filteredBicycles = filteredBicycles.filter(({ category }) => {
                return types.indexOf(category) > -1
            });
        }
        if (price) {
            filteredBicycles = filteredBicycles.filter((bike) => {
                const priceValue = parseInt(bike.price, 10);
                return priceValue >= price.min && priceValue <= price.max;
            });
        }
        if (search) {
            return filteredBicycles.filter(({ name }) => name.toLowerCase().indexOf(search) > -1);
        }
        return filteredBicycles;
    }

    render() {
        const { colors, types, price, onChangeColor, onChangeType } = this.props;
        return (
            <div>
                <PanelHeader
                    left={<HeaderButton onClick={this.props.goFilters}><Icon24Filter /></HeaderButton>}
                    noShadow
                >
                    Велосипеды
                </PanelHeader>
                <Search value={this.state.search} onChange={this.onChange}/>
                {colors.length || types.length || price ?
                    <Group className='FiltersGroup' title='Фильтры'>
                        {(colors.length > 0 || types.length > 0) && <Div className='FiltersList'>
                            {colors.map((color, i) => <button className='FiltersList__Item' key={`colorFilter${i}`} style={{ backgroundColor: color }} onClick={() => onChangeColor(color)}><span>{getLang(color)}</span><Icon16Clear fill='rgba(0, 0, 0, 0.25)'/></button>)}
                            {types.map((type, i) => <button className='FiltersList__Item' key={`typeFilter${i}`} onClick={() => onChangeType(type)}><span>{getLang(type)}</span> <Icon16Clear fill='rgba(0, 0, 0, 0.25)'/></button>)}
                        </Div>}

                        {price && <Div className='FiltersList FiltersList--Price'>
                            <p>Цена от <strong>{price.min}₽</strong> до <strong>{price.max}</strong>₽</p>
                        </Div>}
                    </Group>
                    :
                    null
                }
                {this.bicycles.length > 0 &&
                <List className='BicyclesList'>
                    {this.bicycles.map(bike => <BicycleCard addToBasket={this.props.addToBasket} onItemSelect={this.props.onItemSelect} isInBasket={this.props.isInBasket(bike.id)} key={bike.id} {...bike} />)}
                </List>
                }
            </div>
        );
    }
}
