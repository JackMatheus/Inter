import * as S from './styles';

function Menu({ children }) {
  return (
    <S.SideBar>
      {children}
    </S.SideBar>
  );
}

export default Menu;
