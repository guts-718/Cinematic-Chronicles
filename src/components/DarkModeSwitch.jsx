// for light and dark theme go to next-themes
// We just need to have NPM install next team.And for the usage, we need to cover all our website. And with the team provider.
// So we get a team provider and cover everything. But the problem is because this team provider uses contacts, so we are not allowed to use contacts
// in. A server side component in next. Yes, we need to use it in client side. So if we just put this one inside the layout that JSX, 
// so all the layout of JSX would be. A client side instead of server side.So what we do, we recreate an extra provider and put this one inside that provider.
// I'm going to show you now how we do it.

"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
