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
  const { removeContact, updateUserContact } = userContactsSlice.actions;

  const [userEmail, setUserEmail] = useState<string | null>("");
  const [filterString, setFilterString] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [targetUser, setTargetUser] = useState();
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
    dispatch(removeContact(contactId));
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterString(event.target.value);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSelectUserContact = (contact: IUserContact) => {
    setIsModalOpen(true);
    const targetUserId = contact?.login?.uuid;
    const targetUser = userContacts.find(
      (contact) => contact?.login?.uuid === targetUserId
    );
    targetUser && setTargetUser(targetUser);
  };

  const handleChangeTemplate = (
    event: React.ChangeEvent<HTMLInputElement>,
    state: (value: string) => void
  ) => {
    state(event.target.value);
  };

  const handleSubmit = (name: string[]) => {
    setIsModalOpen(false);

    const newUser = {
      ...targetUser,
      name: {
        ...targetUser?.name,
        first: name[0],
        last: name[1],
      },
    };

    dispatch(updateUserContact(newUser));
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
    handleChangeTemplate,
    handleSubmit,
  };
};

export default useHomePage;
