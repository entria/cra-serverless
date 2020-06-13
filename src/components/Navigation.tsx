import React, { useCallback } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const activeClassName = 'active';

const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  color: tomato;
  font-weight: bold;
  border: 1px solid tomato;
  border-radius: 3px;
  text-decoration: none;
  padding: 2px 6px;

  :hover,
  &:active,
  &:visited {
    color: tomato;
  }

  &.${activeClassName} {
    color: red;
  }
`

const ListItem = styled.li`
  display: inline-block;
  padding: 5px 10px;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Wrapper = styled.div`
  padding-top: 15px;
`

export const Navigation = () => {
  const location = useLocation();

  const isDetailsActive = useCallback(() => {
    return location.pathname.indexOf('qr/') > -1
  }, [location.pathname])

  const id = uuidv4();

  return (
    <Wrapper>
      <List>
        <ListItem>
          <StyledLink to="/" activeClassName={activeClassName} exact>
            Home
          </StyledLink>
        </ListItem>

        <ListItem>
          <StyledLink
            to={'/qr/' + id}
            activeClassName={activeClassName}
            isActive={isDetailsActive}
          >
            Dynamic
          </StyledLink>
        </ListItem>
      </List>
    </Wrapper>
  )
}
