/*
So now if you check the our our website, we can see that we get an error.

That is a type error.

Saying create context only works in client components at the use client directive at the top of the

file to use it.

So as I mentioned before, because they are using contacts, we cannot use them in, in the server side

component, it should be in client component.

So we need to add use client at the top.
*/
"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
