import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from './../Layout';
import CatBtn from './CatBtn';
import Title from './Title';

function SectionCategory() {
  return (
    <SectionCategoryStyled>
         <InnerLayout>
              <div className="title-con">
                   <Title name={'All Categories'} para={'lorem , ipsum dolor i ma going to school by bus and my grilfind nisha my is not come i life i don '}/>
              </div>
              <div className="category-con">    
               <CatBtn name={'Frontend Developer (601)'}/>
               <CatBtn name={'Backend Developer 650)'}/>
               <CatBtn name={'Full Stack Developer (900)'}/>
               <CatBtn name={'Game Developer (600+)'}/>
               <CatBtn name={'Software Developer (600)'}/>
               <CatBtn name={'Software Engineer (2000+)'}/>
               <CatBtn name={'Product Manager (500+)'}/>
               <CatBtn name={'Product Designer (900+)'}/>
               <CatBtn name={'Creative/Directot (600)'}/>
               <CatBtn name={'Web Designer (500)'}/>
               <CatBtn name={'Frontend Developer (3000+)'}/>
               <CatBtn name={'UI / UX (2000+)'}/>
              </div>
         </InnerLayout>
     </SectionCategoryStyled>
  )
}

const SectionCategoryStyled = styled.section`
     .category-con{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 1.2rem;
          padding-top: 3rem;
          @media screen and (max-width: 822px) {
          grid-template-columns: repeat(2, 1fr);
          }
     }

`;

export default SectionCategory;
