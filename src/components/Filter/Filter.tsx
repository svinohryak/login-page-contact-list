import React from "react";
import * as CommonStyled from "../../common styles/styles";
import * as Styled from "./styles";

const Filter = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Styled.FilterBox>
      <CommonStyled.Input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
      <label htmlFor="search">Search contact</label>
    </Styled.FilterBox>
  );
};
export default Filter;
