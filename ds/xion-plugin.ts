import plugin from 'tailwindcss/plugin';

export const xionPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.center-fixed': {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '.top-fixed': {
      position: 'fixed',
      top: '0%',
      left: '50%',
      transform: 'translate(-50%, 0%)',
    },
    '.left-fixed': {
      position: 'fixed',
      top: '50%',
      left: '0%',
      transform: 'translate(0%, -50%)',
    },
    '.right-fixed': {
      position: 'fixed',
      top: '50%',
      right: '0%',
      transform: 'translate(0%, -50%)',
    },
    '.bottom-fixed': {
      position: 'fixed',
      bottom: '0%',
      left: '50%',
      transform: 'translate(-50%, 0%)',
    },
  });
});
