import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../Layout';
import Title from './Title';
import StaffCard from './StaffCard';
import avatar1 from './img/avatar1.png';
import avatar2 from './img/avatar2.png';
import avatar3 from './img/avatar3.png';
import avatar4 from './img/avatar4.png';
import star from './img/star.svg';
import star_half from './img/star_half.svg';
import bookmark from './img/bookmark.svg';


function SectionStaff() {
  return (
    <SectionStaffstyled>
         <InnerLayout>
         <div className="title-con">
                   <Title name={'Our Staff'} para={'lorem , ipsum dolor i ma going to school by bus and my grilfind nisha my is not come i life i don '}/>
              </div>
              <div className="staff-cards">
                   <StaffCard
                    img={avatar1}
                    bookmark={bookmark}
                    name={'Huan Nguyen'}
                    tit={'Developer'}
                    rating={star}
                    rating_half={star_half}
                    stack={'C++, C#, Node, Express, MongoDB, JavaScript, Typescript'}
                 />
                   <StaffCard
                    img={avatar2}
                    bookmark={bookmark}
                    name={'Huan Nguyen'}
                    tit={'Developer'}
                    rating={star}
                    rating_half={star_half}
                    stack={'C++, C#, Node, Express, MongoDB, JavaScript, Typescript'}
                 />
                   <StaffCard
                    img={avatar3}
                    bookmark={bookmark}
                    name={'Huan Nguyen'}
                    tit={'Developer'}
                    rating={star}
                    rating_half={star_half}
                    stack={'C++, C#, Node, Express, MongoDB, JavaScript, Typescript'}
                 />
                   <StaffCard
                    img={avatar4}
                    bookmark={bookmark}
                    name={'Huan Nguyen'}
                    tit={'Developer'}
                    rating={star}
                    rating_half={star_half}
                    stack={'C++, C#, Node, Express, MongoDB, JavaScript, Typescript'}
                 />
              </div>
         </InnerLayout>
     </SectionStaffstyled>
  )
}

const SectionStaffstyled = styled.section`
     .staff-cards{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-gap: 2rem;
          padding-top: 3.5rem;
     }


`;

export default SectionStaff;