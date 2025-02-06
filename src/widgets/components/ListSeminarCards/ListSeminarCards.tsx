import { SeminarCard } from 'entities/SeminarCard';
import React, { useState } from 'react';
import {
  useDeleteSeminarMutation,
  useUpdateSeminarMutation,
  useGetSeminarsQuery,
} from '../../api/seminars/index';
import { Loader, ErrorNotice, NoticeNoData } from 'shared/components';
import { ListContainer, CardsWrapper } from './styled/components';
import { ModalApplyDeny } from 'features/components/ModalApplyDeny/ModalApplyDeny';
import { SeminarEditForm } from 'features/components';
import { TSeminar } from 'shared/types';

export const ListSeminarCards: React.FC = () => {
  const [activeCardDelete, setActiveCardDelete] = useState<
    number | undefined
  >();
  const [activeCardUpdate, setActiveCardUpdate] = useState<
    number | undefined
  >();

  const { data, isFetching, isError } = useGetSeminarsQuery('', {
    refetchOnMountOrArgChange: true,
  });

  const [deleteSeminar] = useDeleteSeminarMutation();
  const [updateSeminar] = useUpdateSeminarMutation();

  const onDeleteCard = async () => {
    await deleteSeminar(activeCardDelete + '');
  };

  const onUpdateCard = async (
    title: string,
    description: string,
    photo: string
  ) => {
    await updateSeminar({ id: activeCardUpdate, title, description, photo });
  };

  return (
    <ListContainer>
      {activeCardDelete && (
        <ModalApplyDeny
          setActiveCard={setActiveCardDelete}
          onDeleteCard={onDeleteCard}
        />
      )}
      {activeCardUpdate && (
        <SeminarEditForm
          setActiveCard={setActiveCardUpdate}
          data={data as TSeminar[]}
          cardNumber={activeCardUpdate}
          onUpdateCard={onUpdateCard}
        />
      )}
      {!data && isFetching && <Loader />}
      {!data && isError && <ErrorNotice />}
      {!!data &&
        (data.length ? (
          <CardsWrapper>
            {data.map((card) => (
              <SeminarCard
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                date={card.date}
                time={card.time}
                photo={card.photo}
                onDeleteClick={setActiveCardDelete}
                onUpdateClick={setActiveCardUpdate}
              />
            ))}
          </CardsWrapper>
        ) : (
          <NoticeNoData />
        ))}
    </ListContainer>
  );
};
