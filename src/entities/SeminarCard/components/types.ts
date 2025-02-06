import { TSeminar } from 'shared/types';

export type TSeminarCardProps = TSeminar & {
  onDeleteClick: React.Dispatch<React.SetStateAction<number | undefined>>;
  onUpdateClick: React.Dispatch<React.SetStateAction<number | undefined>>;
};
