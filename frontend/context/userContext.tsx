import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface UserContextType {
  setUser: any;
  user: any;
  userLinks: any;
  userTheme: any;
  loading?: any;
  addLink: any;
  updateLink?: any;
  toggleLink?: any;
  deleteLink?: any;
  updateTheme?: any;
}

export const UserContext = createContext<UserContextType>({
  setUser: () => {},
  user: {},
  userLinks: [],
  userTheme: {},
  loading: false,
  addLink: () => {},
  updateLink: () => {},
  toggleLink: () => {},
  deleteLink: () => {},
  updateTheme: () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userLinks, setUserLinks] = useState([]);
  const [userTheme, setUserTheme] = useState({});
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios("http://localhost:5000/user/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        // console.log(data.user);

        setUser(data?.user);
        setUserLinks(data?.user?.links);
        setUserTheme(data?.user?.theme);
      } catch (error) {
        return error;
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const addLinkHandler = async () => {
    const res = await axios.post(
      "http://localhost:5000/user/link",
      {
        title: "title",
        url: "example.com",
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (res.status == 200) {
      setUserLinks(res.data.user.links);
    }
  };

  const updateLinkHandler = async (id: number, title: string, url: string) => {
    const res = await axios.patch(
      `http://localhost:5000/user/link/${id}`,
      {
        title: title,
        url: url,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (res.status == 200) {
      setUserLinks(res.data.user.links);
    }
  };

  const deleteLinkHandler = async (id: number) => {
    const res = await axios.delete(`http://localhost:5000/user/link/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (res.status == 200) {
      setUserLinks(res.data.user);
    }
  };

  const activeToggleHandler = async (id: number) => {
    const res = await axios.post(
      "http://localhost:5000/user/toggle-link",
      {
        id: id,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (res.status == 200) {
      setUserLinks(res.data.user.links);
    }
  };

  const updateUserActiveTheme = async (id: number) => {
    const { data } = await axios.post(
      "http://localhost:5000/user/theme",
      {
        id: id,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    // console.log(data?.theme);
    setUserTheme(data?.theme);
  };

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        userLinks: userLinks,
        userTheme: userTheme,
        loading: loading,
        addLink: addLinkHandler,
        updateLink: updateLinkHandler,
        toggleLink: activeToggleHandler,
        deleteLink: deleteLinkHandler,
        updateTheme: updateUserActiveTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const {
    setUser,
    user,
    loading,
    addLink,
    updateTheme,
    updateLink,
    toggleLink,
    deleteLink,
    userLinks,
    userTheme,
  } = useContext(UserContext);

  return {
    setUser,
    user,
    loading,
    addLink,
    updateLink,
    toggleLink,
    deleteLink,
    userLinks,
    userTheme,
    updateTheme,
  };
};
