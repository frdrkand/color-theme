module.exports.decorateConfig = config => {
  return Object.assign({}, config, {
    cursorColor: 'rgba(183, 114, 208, 0.5)',
    cursorAccentColor: '#313238',
    foregroundColor: '#D3D2D3',
    backgroundColor: '#313238',
    selectionColor: 'rgba(88, 145, 188, 0.09999999999999998)',
    borderColor: '#21A2B0',
    colors: {
      black: '#313238',
      red: '#D3290F',
      green: '#52D053',
      yellow: '#FFD24A',
      blue: '#5891BC',
      magenta: '#D30F43',
      cyan: '#21A2B0',
      white: '#D3D2D3',
      lightBlack: '#4C4D52',
      lightRed: '#E6770B',
      lightGreen: '#52D053',
      lightYellow: '#FFD24A',
      lightBlue: '#5891BC',
      lightMagenta: '#D30F43',
      lightCyan: '#21A2B0',
      lightWhite: '#EEEDED',
    },
  });
};