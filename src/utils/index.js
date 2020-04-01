const RandomColor = () => {
    var colors = [
        '#5ABA59',
        '#4D85D1',
        '#DF2D4F',
        '#999999',
        '#8156A7',
        '#53d2a0',
        '#9480c4',
        '#f48fe2',
        '#b08b80',
        '#f88da9',
        '#82b1f6',
        '#e67ae7',
        '#D98880',
        '#AF7AC5',
        '#F4D03F',
        '#EDBB99',
        '#D7BDE2',
        '#F08080',
        '#ff9ff3',
        '#f368e0',
        '#54a0ff',
        '#ff6b6b',
        '#ffcccc',
        '#ffb8b8',
        '#cd84f1',
        '#D6A2E8',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

export default RandomColor;