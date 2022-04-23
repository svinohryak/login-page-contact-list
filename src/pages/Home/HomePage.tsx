import { FC } from "react";
import { Navigate } from "react-router-dom";
import useHomePage from "./useHomePage";
import List from "../../components/List/List";
import Filter from "../../components/Filter/Filter";
import Modal from "../../components/Modal/Modal";
// import styled from "styled-components";

const HomePage: FC = () => {
  const {
    isLoading,
    isSignIn,
    userEmail,
    filterString,
    filterUserContacts,
    isModalOpen,
    targetUser,
    handleSignOut,
    handleRemoveContact,
    handleFilterChange,
    handleClose,
    handleSelectUserContact,
  } = useHomePage();

  return isSignIn ? (
    <>
      <p>
        <strong>{userEmail}</strong> contacts
      </p>
      <button onClick={handleSignOut}>Log out</button>
      <Filter value={filterString} onChange={handleFilterChange} />
      <List
        userContacts={filterUserContacts}
        onRemove={handleRemoveContact}
        isLoading={isLoading}
        onSelectUserContact={handleSelectUserContact}
      />
      {isModalOpen && <Modal onClose={handleClose} targetUser={targetUser} />}
    </>
  ) : (
    <Navigate to="/login-page-contact-list/login" />
  );
};

export default HomePage;
