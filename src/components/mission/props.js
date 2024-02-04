// props.js
import {AlignText} from '../../../node_modules/spin-wheel/src/constants.js';
export const props = [{
    name: 'Workout', radius: 0.97, itemLabelRadius: 0.93, itemLabelRadiusMax: 0.35,
    itemLabelRotation: 180, itemLabelAlign: AlignText.left, itemLabelColors: ['#fff'],
    itemLabelBaselineOffset: -0.07, itemLabelFont: 'Amatic SC', itemLabelFontSizeMax: 55,
    itemBackgroundColors: ['#fffa00', '#ffcf01', '#ffa600', '#ff7d01', '#ff2501', '#f52e95',
        '#8a28bb', '#0123ba', '#0179c7', '#00b1d5', '#02b801', '#83ce01' ],
    rotationSpeedMax: 500, rotationResistance: -100, lineWidth: 1, lineColor: '#fff',
    borderColor: '#fff', borderWidth: 1, rotation: -14,
    image: './src/components/img/example-0-image.svg', overlayImage: './src/components/img/example-0-overlay.svg',
    items: [
        {label: ''}, {label: ''}, {label: ''}, {label: ''},
        {label: ''}, {label: ''}, {label: ''}, {label: ''},
        {label: ''}, {label: ''}, {label: ''}, {label: ''}]
    }]