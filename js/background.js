const gradient = [
    'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))',
    'linear-gradient(to right, rgba(255, 154, 158, 0.5), rgba(250, 208, 196, 0.5))',
    'linear-gradient(to right, rgba(161, 140, 209, 0.5), rgba(251, 194, 235, 0.5))',
    'linear-gradient(to right, rgba(250, 208, 196, 0.5), rgba(255, 209, 255, 0.5))',
    'linear-gradient(to right, rgba(255, 236, 210, 0.5), rgba(252, 182, 159, 0.5))',
    'linear-gradient(to right, rgba(246, 211, 101, 0.5), rgba(253, 160, 133, 0.5))',
    'linear-gradient(to right, rgba(251, 194, 235, 0.5), rgba(166, 193, 238, 0.5))',
    'linear-gradient(to right, rgba(253, 203, 241, 0.5), rgba(230, 222, 233, 0.5))',
    'linear-gradient(to right, rgba(161, 196, 253, 0.5), rgba(194, 233, 251, 0.5))',
    'linear-gradient(to right, rgba(212, 252, 121, 0.5), rgba(150, 230, 161, 0.5))',
    'linear-gradient(to right, rgba(106, 17, 203, 0.5), rgba(37, 117, 252, 0.5))',
    'linear-gradient(to right, rgba(240, 147, 251, 0.5), rgba(245, 87, 108, 0.5))',
    'linear-gradient(to right, rgba(79, 172, 254, 0.5), rgba(0, 242, 254, 0.5))',
    'linear-gradient(to right, rgba(250, 112, 154, 0.5), rgba(254, 225, 64, 0.5))',
    'linear-gradient(to right, rgba(106, 133, 182, 0.5), rgba(186, 200, 224, 0.5))',
    'linear-gradient(to right, rgba(55, 236, 186, 0.5), rgba(114, 175, 211, 0.5))',
    'linear-gradient(to right, rgba(255, 241, 235, 0.5), rgba(172, 224, 249, 0.5))'

];


const chosenBgColor = gradient[Math.floor(Math.random() * gradient.length)];

document.body.style.background = chosenBgColor;