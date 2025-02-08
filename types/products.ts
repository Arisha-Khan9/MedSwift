export interface IProductType {
  _id: string;
  title: string;
  description: string;
  productImage: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  price: number;
  ctaText: string;
  ctaLink: string; // "url" type hata diya, kyunki ye string hi hogi
  discountPercentage?: number; // Optional banaya hai, agar kabhi na ho
  isNew?: boolean; // New badge ke liye
  tags?: string[]; // Array of strings
  pageType: string; // Ye zaroori hai, kyunki filtering ke liye use hoga
  category: string;
}
