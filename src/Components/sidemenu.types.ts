type MenuItem = {
  id: Lowercase<string>;
  name: string;
  Icon: React.ReactElement;
};

export type SidemenuType = {
  menuItems: MenuItem[];
};
