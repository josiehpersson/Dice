import invert from 'invert-color';

export const INVERT_COLOR = (color) => {
    const inverted =  invert(color, true);
    return inverted;
}