import styled from "@emotion/styled";
export const SelectBtn = styled.button`
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 5px;
  width: 13rem;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  background-color: transparent;
`;

export const Img = ({ clickAlready, test, value }) => {
  const ImgStyle = styled.img`
    height: ${clickAlready % 2 === 0 ? "0rem" : "5rem"};
    width: ${clickAlready % 2 === 0 ? "0rem" : "13rem"};
    cursor: pointer;
    border: ${clickAlready % 2 === 0 ? "0rem" : "2px solid #000"};
  `;
  return <ImgStyle onClick={test} src={value} />;
};
