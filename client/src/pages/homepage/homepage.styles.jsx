import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;


export const HomePageTitle = styled.div`
  padding-top: 3rem;
  font-size: 4rem;

  @media screen and (max-width: 800px)  {
    padding-left: 1rem;
    padding-top: 1rem;
    font-size: 2rem;
   
  }

  `;

export const HomePageTitleSub = styled.div`
  font-size: 1rem;

  @media screen and (max-width: 800px)  {
    padding-left: 1rem;
    font-size: 1rem;

}
  
  `;