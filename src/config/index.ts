
import mixedImg from "../../public/nav/ui-kits/mixed.jpg"
import blueImg from "../../public/nav/ui-kits/blue.jpg"
import purpleImg from "../../public/nav/ui-kits/blue.jpg"
import picksImg from "../../public/nav/ui-kits/purple.jpg"
import newImg from "../../public/nav/ui-kits/mixed.jpg"
import bestsellersImg from "../../public/nav/ui-kits/mixed.jpg"
export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor picks",
        href: "#",
        imageSrc:mixedImg,
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc:blueImg,
      },
      {
        name: "Best Sellers",
        href: "#",
        imageSrc: purpleImg,
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Favorite Icons Picks",
        href: "#",
        imageSrc:picksImg,
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: newImg,
      },
      {
        name: "Best Selling Iscons",
        href: "#",
        imageSrc:bestsellersImg,
      },
    ],
  },
];
