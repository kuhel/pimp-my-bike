const lang = {
    'pink': 'Розовый',
    'red': 'Красный',
    'mountain': 'Горный',
    'road': 'Шоссейный'
};

export const getLang = (key) => {
    return lang[key] ? lang[key] : key
};
