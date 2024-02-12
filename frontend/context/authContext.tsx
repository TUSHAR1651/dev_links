"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface AuthContextType {
  user: any;
  setUser: any;
  isAuthenticated?: any;
  loading?: any;
  onSignin: any;
  logout?: any;

  handleGoogleAuth: any;
  userLinks: any;
  userTheme: any;
  addLink: any;
  updateLink?: any;
  toggleLink?: any;
  deleteLink?: any;
  updateTheme?: any;
  starLink?: any;
  updateUserImage?: any;
  addSocialLink?: any;
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
  starLink: () => {},
  handleGoogleAuth: () => {},
  updateUserImage: () => {},
  logout: () => {},
  addSocialLink: () => {},
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [userLinks, setUserLinks] = useState([]);
  const [userTheme, setUserTheme] = useState({});

  const handleGoogleAuth = async (token: string) => {
    const { data } = await axios.post(
      "http://localhost:5000/auth/google/callback",
      {
        token: token,
      }
    );

    localStorage.setItem("token", data.token);
    setToken(data.token);
    setUser(data.user);
    setIsAuthenticated(true);

    return data;
  };

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

    setUserTheme(data?.theme);
  };

  const updateUserImage = async (imageUrl: string) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/user/image",
        {
          image: imageUrl,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      console.log(res.data);
      console.log(res.data.user);

      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const starLink = async (id: number) => {
    const res = await axios.post(
      "http://localhost:5000/user/link/star-link",
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

  const onSignin = async ({ email, password }: any) => {
    try {
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

  const addSocialLink = async (values: any) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/user/social-link",
        {
          data: values,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // setting the local storage token
    setToken(localStorage.getItem("token") || "");

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
        logout: logout,
        setUser: setUser,
        isAuthenticated: isAuthenticated,
        loading: loading,
        onSignin: onSignin,
        starLink: starLink,
        handleGoogleAuth: handleGoogleAuth,
        updateUserImage: updateUserImage,
        addSocialLink: addSocialLink,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const {
    user,
    logout,
    starLink,
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
    updateUserImage,
    updateTheme,
    addSocialLink,
    handleGoogleAuth,
  } = useContext(AuthContext);

  return {
    user,
    setUser,
    isAuthenticated,
    loading,
    onSignin,
    updateUserImage,
    logout,
    addLink,
    starLink,
    updateLink,
    addSocialLink,
    toggleLink,
    deleteLink,
    userLinks,
    userTheme,
    handleGoogleAuth,
    updateTheme,
  };
};
