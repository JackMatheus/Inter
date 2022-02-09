import React from 'react';
import * as S from './styles';

function View({ children }) {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  );
}

export default View;
