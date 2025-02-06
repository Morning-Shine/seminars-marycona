export type TSeminarEditFormProps = {
  setActiveCard: React.Dispatch<React.SetStateAction<number | undefined>>;
  onUpdateCard: (title: string, description: string) => Promise<void>;
  title: string;
  description: string;
};
