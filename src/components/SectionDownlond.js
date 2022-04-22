import React from "react";
import styled from "styled-components";
import { InnerLayout } from "./../Layout";
import google from "./img/googleappstore.png";
import Title from "./Title";
import apple from "./img/appstore.png";
import business from "./img/business.jpg";

function SectionDownlond() {
  return (
    <SectionDownlondStyled>
      <div className="d1-overlay"></div>
      <InnerLayout>
        <div className="d1-con">
          <h1>New Version Available</h1>
          <h1>
            Downlond Our Moblie App. <br />
            It's Simple and Better Then Ever
          </h1>
          <div className="store-btns">
            <div className="store-btn google">
              <img src={google} alt="" />
            </div>
            <div className="store-btn apple">
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
      </InnerLayout>
    </SectionDownlondStyled>
  );
}

const SectionDownlondStyled = styled.section`
     background: url(${business});
     background-size: cover;
     background-repeat: no-repeat;
     overflow: hidden;
     position: relative;

     .d1-overlay{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: #27ae60f2;
     }

      
          .d1-con{
               position: relative;
               z-index: 7;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               text-align: center;
               h1{
                    font-size; 3rem;
                    padding-top: 2rem;
               }
          }
          .store-btns{
               display: flex;      
          }
          .google, .apple{
            border-radius: 7px;
            cursor: pointer;
            padding: 1rem 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
           
            img{
              width: 120px;
            }
            
          }
          .apple{
            margin-left: 1rem;
            
              
          }
`;

export default SectionDownlond;
