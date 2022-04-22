import React from "react";
import Styled from "styled-components";
import { InnerLayout } from "../Layout";

function SubscribeSection() {
  return (
    <SubscribeSectionStyled>
      <InnerLayout>
        <div className="s-con">
          <div className="left">
            <h2>
              Subscribe to our newsletter <br />
              for the latest news.
            </h2>
          </div>
          <div className="right">
            <div className="input-control">
              <input type="text" placeholder="Enter Your Email" />
              <div className="s-btn"> Subscribe Now </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </SubscribeSectionStyled>
  );
}

const SubscribeSectionStyled = Styled.section`
   background-color: var(--color-primary);
   .s-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1500px) {
          grid-template-columns: repeat(1, 1fr);
          .left{
            width: 100%
            display: inline-block !important;
            padding-bottom: 2rem;
            h2{
              text-align: center;
            }
          }
          }
        .left{
             display: flex;
             align-items: center;
             h2{
                  font-size: 2.5rem;
                  line-height: 4rem;
             }
        }

        .right{
             display: flex;
             align-items: 4rem;
        }
        .input-control{
             position: relative;
             font-weight: 500;
             width:100%;
             input{
               width: 100%;
               font-family: inherit;
               font-size: inherit;
               padding: 1.4rem 2rem;
               outline: none;
               border: none;
               border-radius: 7px;
             }
             .s-btn{
              @media screen and (max-width: 1500px) {
                top: 51%;
                }
              @media screen and (max-width: 858px) {
                top: 168%;
                text-align: center;
                }
               position: absolute;
               top: 19%;
               background-color: var(--color-dark);
               right: .2rem;
               transform: translateY(-50%);
               padding: 1.1rem 2rem;
               cursor: pointer;
               border-radius: 7px;
               transition: all .4s ease-in-out;
               &:hover{
                 background-color: var(--color-primary);
               }
            }
        }
        

   } 

`;
export default SubscribeSection;
