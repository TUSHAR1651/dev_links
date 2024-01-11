"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface AuthContextType {
  user: any;
  setUser: any;
  isAuthenticated?: any;
  loading?: any;
  onSignin: any;

  userLinks: any;
  userTheme: any;
  addLink: any;
  updateLink?: any;
  toggleLink?: any;
  deleteLink?: any;
  updateTheme?: any;
}

export const AuthContext = createContext<AuthContextType>({
  user: {},
  setUser: () => {},
  isAuthenticated: false,
  loading: false,
  onSignin: () => {},
  userLinks: [],
  userTheme: {},
  addLink: () => {},
  updateLink: () => {},
  toggleLink: () => {},
  deleteLink: () => {},
  updateTheme: () => {},
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userLinks, setUserLinks] = useState([]);
  const [userTheme, setUserTheme] = useState({});

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

    console.log(res.data);

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
      setUserLinks(res.data.user.links);
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

  const onSignin = async ({ email, password }: any) => {
    try {
      console.log(email);
      const { data } = await axios.post("http://localhost:5000/auth/signin", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUser(data.user);
      setIsAuthenticated(true);

      return data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios("http://localhost:5000/user/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setUser(data.user);

        setIsAuthenticated(true);
        setUserLinks(data?.user?.links);
        setUserTheme(data?.user?.theme);
        setToken(localStorage.getItem("token") || "");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        addLink: addLinkHandler,
        updateLink: updateLinkHandler,
        toggleLink: activeToggleHandler,
        deleteLink: deleteLinkHandler,
        userLinks: userLinks,
        userTheme: userTheme,
        updateTheme: updateUserActiveTheme,
        user: user,
        setUser: setUser,
        isAuthenticated: isAuthenticated,
        loading: loading,
        onSignin: onSignin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const {
    user,
    setUser,
    isAuthenticated,
    loading,
    onSignin,
    addLink,
    updateLink,
    toggleLink,
    deleteLink,
    userLinks,
    userTheme,
    updateTheme,
  } = useContext(AuthContext);

  return {
    user,
    setUser,
    isAuthenticated,
    loading,
    onSignin,
    //
    addLink,
    updateLink,
    toggleLink,
    deleteLink,
    userLinks,
    userTheme,
    updateTheme,
  };
};
