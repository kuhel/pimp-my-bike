import React from 'react';
import {
    HeaderButton,
    PanelHeader,
    Gallery,
    Div,
    FixedLayout,
    Button,
    Group,
    List,
    Cell,
    Avatar,
    IOS,
    osname
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24MarketOutline from '@vkontakte/icons/dist/24/market_outline';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon32Graffiti from '@vkontakte/icons/dist/32/graffiti';
import { getLang } from '../utils/dict';
import './BikePage.css';

export default class Bicycle extends React.Component {
    render() {
        const { id, gallery, name, pic, goSearch, category, price, color, description, addToBasket, isInBasket } = this.props;
        const isAlreadyInBasket = isInBasket(id);
        return (
            <div className='BikePage'>
                <PanelHeader
                    left={<HeaderButton onClick={ goSearch }>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
                    noShadow
                >
                    Велосипеды
                </PanelHeader>
                {gallery ?
                    <Gallery
                        slideWidth='100%'
                        style={{ height: 250 }}
                        bullets="dark"
                    >
                        {gallery.map((item) => <img src={item} alt={name}/>)}
                    </Gallery>
                    :
                    <Div>
                        <img src={pic} alt={name}/>
                    </Div>
                    }
                <Div>
                    <h2>{name}</h2>
                    <h3>{price}₽</h3>
                    <p>{description}</p>
                </Div>

                <Group title='Характеристики'>
                    <List>
                        <Cell
                            before={<Avatar style={{ backgroundColor: 'transparent' }} size={28}><Icon24Live fill='var(--accent)' /></Avatar>}
                            description='Тип'
                        >
                            {getLang(category)}
                        </Cell>
                        <Cell
                            before={<Avatar style={{ backgroundColor: color }} size={28}><Icon32Graffiti style={{ transform: 'scale(0.5)' }} fill='var(--white)' /></Avatar>}
                            description='Цвет'
                        >
                            {getLang(color)}
                        </Cell>
                    </List>
                </Group>

                <FixedLayout vertical='bottom'>
                    <Div className={`FixedBuyBtn ${isAlreadyInBasket ? 'FixedBuyBtn--InBasket' : ''}`}>
                        <Button onClick={() => addToBasket(id)} before={isAlreadyInBasket ? <Icon24Market fill='var(--white)' /> : <Icon24MarketOutline />} size="xl" level="secondary">Купить</Button>
                    </Div>
                </FixedLayout>
            </div>
        );
    }
}
