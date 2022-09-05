const particlesConfig=
{
autoPlay: true,

background: {
color: {
value: "#000"
}
},
interactivity: {
events: {
onClick: {
mode: "repulse"
},
onHover: {
mode: "grab"
}
},
modes: {
attract: {
distance: 200,
duration: 0.4,
easing: "ease-out-quad",
factor: 1,
maxSpeed: 50,
speed: 1
},
bounce: {
distance: 200
},
bubble: {
distance: 400,
duration: 2,
mix: false,
opacity: 8,
size: 40,
divs: {
  distance: 200,
  duration: 0.4,
  mix: false,
  selectors: []
}
},
connect: {
distance: 80,
links: {
  opacity: 0.5
},
radius: 60
},
grab: {
distance: 200,
links: {
  blink: false,
  consent: false,
  opacity: 1
}
},
push: {
default: true,
groups: [],
quantity: 4
},
remove: {
quantity: 2
},
repulse: {
distance: 200,
duration: 0.4,
factor: 100,
speed: 1,
maxSpeed: 50,
easing: "ease-out-quad",
divs: {
  distance: 200,
  duration: 0.4,
  factor: 100,
  speed: 1,
  maxSpeed: 50,
  easing: "ease-out-quad",
  selectors: []
}
},
trail: {
delay: 1,
pauseOnStop: false,
quantity: 1
},
light: {
area: {
  gradient: {
    start: {
      value: "#ffffff"
    },
    stop: {
      value: "#000000"
    }
  },
  radius: 1000
},
shadow: {
  color: {
    value: "#000000"
  },
  length: 2000
}
}
}
},
particles: {
color: {
value: [
"#5bc0eb",
"#fde74c",
"#9bc53d",
"#e55934",
"#fa7921"
]
},
move: {
attract: {
rotate: {
  x: 600,
  y: 1200
}
},
enable: true,
path: {
delay: {
  value: 0.1
},
enable: true,
options: {
  size: 5,
  draw: false,
  increment: 0.001
},
generator: "perlinNoise"
},
outModes: {
default: "destroy",
bottom: "destroy",
left: "destroy",
right: "destroy",
top: "destroy"
},
speed: 3,
trail: {
enable: true,
length: 20
}
},
number: {
limit: 300,
value: 0
},
life: {
count: 0,
delay: {
random: {
  enable: false,
  minimumValue: 0
},
value: 0,
sync: false
},
duration: {
random: {
  enable: false,
  minimumValue: 0.0001
},
value: 0,
sync: false
}
},
roll: {
darken: {
enable: false,
value: 0
},
enable: false,
enlighten: {
enable: false,
value: 0
},
mode: "vertical",
speed: 25
},
tilt: {
random: {
enable: false,
minimumValue: 0
},
value: 0,
animation: {
enable: false,
speed: 0,
decay: 0,
sync: false
},
direction: "clockwise",
enable: false
},
twinkle: {
lines: {
enable: false,
frequency: 0.05,
opacity: 1
},
particles: {
enable: false,
frequency: 0.05,
opacity: 1
}
},
wobble: {
distance: 5,
enable: false,
speed: {
angle: 50,
move: 10
}
},
orbit: {
animation: {
count: 0,
enable: false,
speed: 1,
decay: 0,
sync: false
},
enable: false,
opacity: 1,
rotation: {
random: {
  enable: false,
  minimumValue: 0
},
value: 45
},
width: 1
},
links: {
blink: false,
color: {
value: "#ffffff"
},
consent: false,
distance: 150,
enable: false,
frequency: 1,
opacity: 0.4,
shadow: {
blur: 5,
color: {
  value: "#000"
},
enable: false
},
triangles: {
enable: false,
frequency: 1
},
width: 1,
warp: false
},
repulse: {
random: {
enable: false,
minimumValue: 0
},
value: 0,
enabled: false,
distance: 1,
duration: 1,
factor: 1,
speed: 1
}
},
emitters: {
autoPlay: true,
fill: true,
life: {
wait: false
},
rate: {
quantity: 4,
delay: 0.25
},
shape: "square",
startCount: 0,
size: {
mode: "precise",
height: 50,
width: 50
},
position: {
x: 50,
y: 50
}}}

export default particlesConfig