import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface AuthContextType {
  user: any;
  setUser: any;
  isAuthenticated?: any;
  loading?: any;
  addLink: any;
  updateLink?: any;
}

export const AuthContext = createContext<AuthContextType>({
  user: {},
  setUser: () => {},
  isAuthenticated: false,
  loading: false,
  addLink: () => {},
  updateLink: () => {},
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios("http://localhost:5000/user/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setUser(data.user);
        console.log(data.user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const addLinkHandler = async () => {
    const res = await axios.post(
      "http://localhost:5000/user/add-link",
      {
        title: "title",
        url: "example.com",
        id: Math.trunc(Math.random() * 1000),
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (res.status == 200) {
      setUser(res.data.user);
    }
  };

  const updateLinkHandler = async (id: number, title: string, url: string) => {
    console.log(title);

    const res = await axios.patch(
      "http://localhost:5000/user/update-link",
      {
        id: id,
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
      setUser(res.data.user);
    }

    console.log(res);
  };

  const deleteLinkHandler = async (id: number) => {};

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
      setUser(res.data.user);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        isAuthenticated: true,
        loading: loading,
        addLink: addLinkHandler,
        updateLink: updateLinkHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { user, setUser, isAuthenticated, loading, addLink, updateLink } =
    useContext(AuthContext);

  return { user, setUser, isAuthenticated, loading, addLink, updateLink };
};
