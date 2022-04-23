import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { userSlice } from "../../store/reucers/userSlice";
import { fetchUserContacts } from "../../store/reucers/actionCreators";
import { userContactsSlice } from "../../store/reucers/userContactsSlice";
import { IUserContact } from "../../types/types";
// import userContactsSlice from "../../store/reucers/userContactsSlice";

const useHomePage = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const { isSignIn } = useAppSelector((state) => state.userReducer);
  const { signOutUser } = userSlice.actions;
  const { removeContact } = userContactsSlice.actions;

  const [userEmail, setUserEmail] = useState<string | null>("");
  const [filterString, setFilterString] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetUser, setTargetUser] = useState<IUserContact>();

  const { userContacts, error, isLoading } = useAppSelector(
    (state) => state.userContactsReducer
  );

  useEffect(() => {
    dispatch(fetchUserContacts());
  }, []);

  const filterUserContacts = useMemo(() => {
    return userContacts?.filter(
      (user) =>
        user.name.first.toLowerCase().includes(filterString) ||
        user.name.last.toLowerCase().includes(filterString)
    );
  }, [userContacts, filterString]);

  const handleSelectUserContact = (contact: IUserContact) => {
    setIsModalOpen(true);
    const targetUserId = contact.login.uuid;
    const targetUser = userContacts.find(
      (contact: IUserContact) => contact.login.uuid === targetUserId
    );
    setTargetUser(targetUser);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(signOutUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user?.email);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleRemoveContact = (contactId: string) => {
    console.log(contactId);
    dispatch(removeContact(contactId));
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterString(event.target.value);
  };

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
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
  };
};

export default useHomePage;
