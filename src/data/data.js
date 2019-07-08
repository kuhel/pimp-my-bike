export const bicycles = [
    {
        brand: 'Specialized',
        category: 'mountain',
        gender: 'woman',
        id: 154339,
        name: 'Rockhopper Womens Comp 29 (2019)',
        color: 'pink',
        price: '53490',
        pic: 'https://citycycle.ru/upload/product_images/154339/efd8cc511d8a1a34f38b9a1460ce2a70_420x282.jpg',
        gallery: [
            'https://citycycle.ru/upload/product_images/126632/a508495d6debf4c3e36c980f362202d2_660x440.jpg',
            'https://citycycle.ru/upload/product_images/126632/d2abdd5c5b021212456ba819ae64b982_660x440.jpg'
        ],
        description: 'Шоссейный велосипед Specialized Allez (2018) с легкой алюминиевой рамой E5 Premium, карбоновой вилкой и компонентами Shimano Claris для любительских тренировок и поездок. Конструкция рассчитана на оптимальное движение на подъемах, спусках и скоростных участках.\n' +
            '\n' +
            'Трансмиссия начального шоссейного уровня Shimano Claris дает надежное переключение и удобную настройку. Покрышки Specialized Espoir Sport с двойным антипрокольным слоем и эргономичное седло Body Geometry Toupe Sport помогают тренироваться без лишней усталости. Карбоновая вилка Fact с конической трубой гасит вибрации от неровностей и обеспечивает острое управление.\n' +
            '\n',
    },
    {
        brand: 'Specialized',
        category: 'road',
        id: 126632,
        name: 'Specialized Allez (2018)',
        color: 'red',
        price: '69490',
        pic: 'https://citycycle.ru/upload/product_images/126632/a508495d6debf4c3e36c980f362202d2_420x282.jpg',
        gallery: [
            'https://citycycle.ru/upload/product_images/126632/a508495d6debf4c3e36c980f362202d2_660x440.jpg',
            'https://citycycle.ru/upload/product_images/126632/d2abdd5c5b021212456ba819ae64b982_660x440.jpg'
        ],
        description: 'Шоссейный велосипед Specialized Allez (2018) с легкой алюминиевой рамой E5 Premium, карбоновой вилкой и компонентами Shimano Claris для любительских тренировок и поездок. Конструкция рассчитана на оптимальное движение на подъемах, спусках и скоростных участках.\n' +
            '\n' +
            'Трансмиссия начального шоссейного уровня Shimano Claris дает надежное переключение и удобную настройку. Покрышки Specialized Espoir Sport с двойным антипрокольным слоем и эргономичное седло Body Geometry Toupe Sport помогают тренироваться без лишней усталости. Карбоновая вилка Fact с конической трубой гасит вибрации от неровностей и обеспечивает острое управление.\n' +
            '\n'
    },
    {
        brand: 'Specialized',
        category: 'mountain',
        gender: 'woman',
        id: 23423,
        name: 'Rockhopper Womens Comp 29 (2019)',
        color: 'pink',
        price: '33490',
        pic: 'https://citycycle.ru/upload/product_images/154339/efd8cc511d8a1a34f38b9a1460ce2a70_420x282.jpg'
    },
    {
        brand: 'Specialized',
        category: 'mountain',
        gender: 'woman',
        id: 858598,
        name: 'Rockhopper Womens Comp 29 (2019)',
        color: 'pink',
        price: '153490',
        pic: 'https://citycycle.ru/upload/product_images/154339/efd8cc511d8a1a34f38b9a1460ce2a70_420x282.jpg'
    },
    {
        brand: 'Specialized',
        category: 'mountain',
        gender: 'woman',
        id: 91393,
        name: 'Rockhopper Womens Comp 29 (2019)',
        color: 'pink',
        price: '5490',
        pic: 'https://citycycle.ru/upload/product_images/154339/efd8cc511d8a1a34f38b9a1460ce2a70_420x282.jpg'
    },
];

export const getBicycleById = (id) => {
    const bikes = bicycles.filter((item) => item.id === id);
    if (bikes[0]) {
        return bikes[0];
    }

    return null;
}

export const getMaxAndMinPrice = () => {
    const prices = bicycles.map((item) => parseInt(item.price, 10)).sort((a, b) => a - b);
    if (prices.length) {
        return {
            min: prices[0],
            max: prices[prices.length - 1],
        }
    }

    return {
        min: 0,
        max: 1000000,
    };
}

export const availableColors = bicycles.map((item) => item.color).filter((value, i, array) => array.indexOf(value) === i);

export const availableTypes = bicycles.map((item) => item.category).filter((value, i, array) => array.indexOf(value) === i)