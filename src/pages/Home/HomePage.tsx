import { FC } from "react";
import { Navigate } from "react-router-dom";
import useHomePage from "./useHomePage";
import List from "../../components/List/List";
import { Filter } from "../../components/Filter/Filter";
import Modal from "../../components/Modal/Modal";
import { Header } from "../../components/Header/Header";
import * as Styled from "./styles";

const HomePage: FC = () => {
  const {
    error,
    isLoading,
    isSignIn,
    userEmail,
    filterString,
    filterUserContacts,
    isModalOpen,
    targetUserName,
    handleSignOut,
    handleRemoveContact,
    handleFilterChange,
    handleClose,
    handleSelectUserContact,
    handleChangeTemplate,
    handleSubmit,
  } = useHomePage();

  return isSignIn ? (
    <Styled.Wrapper>
      <Header userEmail={userEmail} handleSignOut={handleSignOut} />
      <Filter value={filterString} onChange={handleFilterChange} />
      <List
        userContacts={filterUserContacts}
        onRemove={handleRemoveContact}
        isLoading={isLoading}
        error={error}
        onSelectUserContact={handleSelectUserContact}
      />
      {isModalOpen && (
        <Modal
          targetUserName={targetUserName}
          onClose={handleClose}
          onSubmit={handleSubmit}
          onChangeInput={handleChangeTemplate}
        />
      )}
    </Styled.Wrapper>
  ) : (
    <Navigate to="/login-page-contact-list/login" />
  );
};

export default HomePage;
