import React from 'react';
import {
    Checkbox,
    FormLayout,
    FormLayoutGroup,
    HeaderButton,
    RangeSlider,
    Div,
    IOS,
    List,
    osname,
    PanelHeader,
} from '@vkontakte/vkui';
import { getLang } from '../utils/dict';
import { availableColors, availableTypes, getMaxAndMinPrice } from '../data/data';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './Filters.css';

export default class Filters extends React.Component {

    render () {
        const { min, max } = getMaxAndMinPrice();
        const { price } = this.props;
        return (
            <div>
                <PanelHeader
                    left={<HeaderButton onClick={this.props.goCatalog}>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
                >
                    Фильтры
                </PanelHeader>
                <List>
                    <FormLayout>
                        <FormLayoutGroup top='Тип'>
                            {availableTypes.map((type, i) =>
                                <Checkbox
                                    key={`colorCheckBox${i}`}
                                    onClick={() => this.props.onChangeType(type)}
                                    defaultChecked={~this.props.types.indexOf(type)}
                                >
                                    <span>{getLang(type)}</span>
                                </Checkbox>)
                            }
                        </FormLayoutGroup>
                        <FormLayoutGroup top='Цвет'>
                            {availableColors.map((color, i) =>
                                <Checkbox
                                    key={`colorCheckBox${i}`}
                                    onClick={() => this.props.onChangeColor(color)}
                                    defaultChecked={~this.props.colors.indexOf(color)}
                                >
                                    <span style={{color}}>{getLang(color)}</span>
                                </Checkbox>)
                            }
                        </FormLayoutGroup>
                        <FormLayoutGroup top='Цена'>
                            <RangeSlider
                                min={min}
                                max={max}
                                step={1}
                                defaultValue={[price ? price.min : min, price ? price.max : max]}
                                onChange={this.props.onChangePrice}
                            />
                            <Div className='PriceRangeSlider'>
                                <span className='PriceRangeSlider__Min'>{price ? price.min : min}₽</span>
                                <span className='PriceRangeSlider__Max'>{price ? price.max : max}₽</span>
                            </Div>
                        </FormLayoutGroup>
                    </FormLayout>
                </List>
            </div>
        );
    }
}
