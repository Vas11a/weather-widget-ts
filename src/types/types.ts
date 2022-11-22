export type WetherType = {
  name: string;
  feels_like: number;
  temp: number;
  main: string;
  icon: string;
};

export type ServerAns = {
  data: {
    name: string;
    main: {
      feels_like: number;
      temp: number;
    };
    weather: [
      {
        main: string;
        icon: string;
      },
    ];
  };
};


