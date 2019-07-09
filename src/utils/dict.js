const lang = {
    'pink': 'Розовый',
    'red': 'Красный',
    'black': 'Чёрный',
    'mountain': 'Горный',
    'road': 'Шоссейный'
};

export const getLang = (key) => {
    return lang[key] ? lang[key] : key
};
