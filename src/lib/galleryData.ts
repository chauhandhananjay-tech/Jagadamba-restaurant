export interface GalleryImage {
  url: string;
  alt: string;
  span: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    url: "https://images.pexels.com/photos/27138849/pexels-photo-27138849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Elegant dining table with floral arrangements",
    span: true,
  },
  {
    url: "https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Vibrant tandoori chicken and aromatic curries",
    span: false,
  },
  {
    url: "https://images.pexels.com/photos/28575445/pexels-photo-28575445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Warm restaurant interior with leather seating",
    span: false,
  },
  {
    url: "https://images.pexels.com/photos/37968303/pexels-photo-37968303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Romantic candlelit fine dining setting",
    span: true,
  },
  {
    url: "https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Traditional Indian thali being served",
    span: false,
  },
  {
    url: "https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Chefs cooking in an open kitchen",
    span: false,
  },
];
