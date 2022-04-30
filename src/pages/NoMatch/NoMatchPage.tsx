import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as CommonStyled from "../../common styles/styles";

const NoMatchPage: FC = () => {
  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      history("/login-page-contact-list/");
    }, 5000);
  }, []);

  return (
    <>
      <CommonStyled.CenteredWraper>
        <CommonStyled.TypographyHeader>
          Page not found
        </CommonStyled.TypographyHeader>
      </CommonStyled.CenteredWraper>
    </>
  );
};

export default NoMatchPage;
