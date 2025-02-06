export type TModalApplyDenyProps = {
  setActiveCard: React.Dispatch<React.SetStateAction<number | undefined>>;
  onDeleteCard: () => Promise<void>;
};
