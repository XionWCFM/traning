export function xionPlugin({ addUtilities }) {
  const newUtilities = {
    '.center-fixed': {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '30',
    },
  };
  addUtilities(newUtilities);
}
