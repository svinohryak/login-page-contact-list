import React from "react";
import useAutoFocus from "../../hooks/useAutoFocus";
import * as CommonStyled from "../../common styles/styles";
import * as Styled from "./styles";

const Filter = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const inputRef = useAutoFocus();

  return (
    <Styled.FilterBox>
      <CommonStyled.Input
        ref={inputRef}
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
