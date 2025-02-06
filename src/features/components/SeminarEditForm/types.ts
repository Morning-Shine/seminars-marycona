import { TSeminar } from 'shared/types';

export type TSeminarEditFormProps = {
  setActiveCard: React.Dispatch<React.SetStateAction<number | undefined>>;
  onUpdateCard: (
    title: string,
    description: string,
    photo: string
  ) => Promise<void>;
  data: TSeminar[];
  cardNumber: number;
};
