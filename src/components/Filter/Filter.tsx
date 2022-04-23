import React from "react";

const Filter = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search contact"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Filter;
