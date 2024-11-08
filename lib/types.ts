export interface Package {
  title: string;
  description: string;
  features: string[];
}

export interface ExploreSliderProps {
  data: {
    title: {
      before?: string;
      spotlight: string;
      after?: string;
      size?: string;
      isLongVector?: boolean;
    };
    isBigCards?: boolean;
    paragraph: string;
    slidesData: {
      name: string;
      details: string;
      img: string;
    }[];
  };
}
