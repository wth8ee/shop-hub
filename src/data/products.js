const products = [
  {
    id: 1,
    name: "Razer Huntsman V2",
    price: 210,
    image:
      "https://hyperpc.ru/images/catalog/accessories/keyboard/razer/huntsman-v2-tkl/razer-huntsman-v2-tkl.jpg",
    description:
      "Experience unparalleled speed with this optical gaming keyboard. It features near-instant response times, sound-dampening foam, and high-quality keycaps for a premium, quiet typing and gaming experience.",
  },
  {
    id: 2,
    name: "NVIDIA GeForce RTX 5090",
    price: 1999,
    image: "https://overclockers.ru/st/r/800/-/legacy/blog/430440/619522_O.png",
    description:
      "The ultimate powerhouse for gamers and creators. This next-generation GPU delivers incredible 4K performance, advanced ray tracing, and AI-driven graphics to handle the most demanding modern titles effortlessly.",
  },
  {
    id: 3,
    name: "Logitech G502",
    price: 119.99,
    image:
      "https://resource.logitech.com/w_776,h_437,ar_16:9,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lsp-panel1-feature-2.png",
    description:
      "A legendary wireless gaming mouse featuring a high-precision sensor. It offers customizable weights, eleven programmable buttons, and lightning-fast connectivity to give you a competitive edge in every match.",
  },
  {
    id: 4,
    name: "Logitech G733",
    price: 159.99,
    image:
      "https://resource.logitech.com/w_776,h_437,ar_16:9,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g733/g733-feature2-desktop.png",
    description:
      "Designed for comfort and style, this wireless headset features immersive surround sound and customizable RGB lighting. Its lightweight build ensures you can enjoy long gaming sessions without any fatigue.",
  },
  {
    id: 5,
    name: "Logitech Yeti GX",
    price: 159.99,
    image:
      "https://resource.logitech.com/w_776,h_437,ar_16:9,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/plp-microphones/pdp-yeti-gx-gaming-microphone/2025/yeti-gx-lightsync.jpg",
    description:
      "A premium broadcast-style microphone that brings professional audio quality to your stream. With advanced noise rejection and LIGHTSYNC RGB, it makes your voice sound clear and looks great on camera.",
  },
  {
    id: 6,
    name: "Logitech G213 Prodigy",
    price: 59.99,
    image:
      "https://resource.logitech.com/w_776,h_437,ar_16:9,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/g213-finch/g213-feature-2-nb.png",
    description:
      "A spill-resistant keyboard that combines a tactile feel with gaming-grade performance. It includes dedicated media controls and customizable RGB zones, making it a reliable and stylish choice for any setup.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
