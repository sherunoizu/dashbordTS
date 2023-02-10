type IColorMode = {
  toggleColorMode: () => void;
};

interface IItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (string) => void;
}

interface IHeaderProps {
  title: string;
  subtitle: string;
}
