import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from './../Layout';
import JobCard from './JobCard';
import Title from './Title';
import logo1 from "./img/logo1.svg";
import logo2 from "./img/logo2.svg";
import logo3 from "./img/logo3.svg";
import logo4 from "./img/logo4.svg";
import logo5 from "./img/logo5.svg";
import logo6 from "./img/logo6.svg";
import logo7 from "./img/logo7.svg";


function SectionJobs() {
  return (
    <SectionJobsStyled>
         <InnerLayout>
         <div className="title-con">
                   <Title name={'Recent Job'} para={'lorem , ipsum dolor i ma going to school by bus and my grilfind nisha my is not come i life i don '}/>
              </div>
              <div className="cards-con">
                   <JobCard
                   logo={logo1}
                   bd={'#27AE60'}
                   name={'Microsoft'}
                   loc={'Noida'}
                   tit={'Software Engineer'}
                   type={'Full Time'}
                   stack={'C++, Python, Java'}
                   salary={'18L - 40L'}
                   />
                   <JobCard
                   logo={logo2}
                   bd={'#27AE60'}
                   name={'Microsoft'}
                   loc={'Noida'}
                   tit={'Software Engineer'}
                   type={'Full Time'}
                   stack={'C++, Python, Java'}
                   salary={'18L - 40L'}
                   />
                   <JobCard
                   logo={logo3}
                   bd={'#27AE60'}
                   name={'Microsoft'}
                   loc={'Noida'}
                   tit={'Software Engineer'}
                   type={'Full Time'}
                   stack={'C++, Python, Java'}
                   salary={'18L - 40L'}
                   />
                  
                   <JobCard
                   logo={logo4}
                   bd={'#27AE60'}
                   name={'Microsoft'}
                   loc={'Noida'}
                   tit={'Software Engineer'}
                   type={'Full Time'}
                   stack={'C++, Python, Java'}
                   salary={'18L - 40L'}
                   />
                   <JobCard
                   logo={logo5}
                   bd={'#27AE60'}
                   name={'Microsoft'}
                   loc={'Noida'}
                   tit={'Software Engineer'}
                   type={'Full Time'}
                   stack={'C++, Python, Java'}
                   salary={'18L - 40L'}
                   />
                   <JobCard
                   logo={logo6}
                   bd={'#27AE60'}
                   name={'Microsoft'}
                   loc={'Noida'}
                   tit={'Software Engineer'}
                   type={'Full Time'}
                   stack={'C++, Python, Java'}
                   salary={'18L - 40L'}
                   />
                   <JobCard
                   logo={logo7}
                   bd={'#27AE60'}
                   name={'Microsoft'}
                   loc={'Noida'}
                   tit={'Software Engineer'}
                   type={'Full Time'}
                   stack={'C++, Python, Java'}
                   salary={'18L - 40L'}
                   />
                   <JobCard
                   logo={logo2}
                   bd={'#27AE60'}
                   name={'Microsoft'}
                   loc={'Noida'}
                   tit={'Software Engineer'}
                   type={'Full Time'}
                   stack={'C++, Python, Java'}
                   salary={'18L - 40L'}
                   />
                    <JobCard
                   logo={logo4}
                   bd={'#27AE60'}
                   name={'Microsoft'}
                   loc={'Noida'}
                   tit={'Software Engineer'}
                   type={'Full Time'}
                   stack={'C++, Python, Java'}
                   salary={'18L - 40L'}
                   />
                  
              </div>
         </InnerLayout>
     </SectionJobsStyled>
  )
}

const SectionJobsStyled = styled.section`
     background-color: var(--color-neutral-3);
     .cards-con{
          padding-top: 3.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          grid-gap: 2rem;
     }

`;
export default SectionJobs;