"use client";

import React, { useEffect } from "react";
import AppearanceCard from "../cards/AppearanceCard";
import { useAppearanceStore } from "@/store/appearance.store";
import { useAuth } from "@/context/authContext";

const AppearanceContainer = () => {
  const { userTheme } = useAuth();
  const { themes, fetchThemes } = useAppearanceStore();

  useEffect(() => {
    fetchThemes();
  }, []);

  return (
    <div>
      <h2 className="mb-4">
        The current active theme:
        <span className="font-semibold ml-2">{userTheme?.name}</span>
      </h2>
      <div className="flex gap-16 flex-wrap gap-y-12 ">
        {themes?.map((theme: any) => {
          return <AppearanceCard key={theme._id} properties={theme} />;
        })}
      </div>
    </div>
  );
};

export default AppearanceContainer;
