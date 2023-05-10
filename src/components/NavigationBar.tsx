import React from "react";
import { useRouter } from "next/router";
import { AppBar, Stack, Button } from "@mui/material";

const NavigationBar = (): JSX.Element => {
  const router = useRouter();

  const pages = [
    { name: "Detection", route: "/" },
    { name: "Bubbles", route: "/bubblesPage" },
    { name: "Frame", route: "/framePage" },
    { name: "Onomatopoeia", route: "/onomatopoeiaPage" },
    { name: "Tones", route: "/tonesPage" },
    { name: "Panel", route: "/panelPage" },
    { name: "Page", route: "/pagePage" },
  ];

  const handleButtonClick = (route: string) => {
    router.push(route);
  };

  return (
    <AppBar position="fixed">
      <Stack direction="row" spacing={5} sx={{ p: 2 }}>
        {pages.map((page) => (
          <Button key={page.name} color="inherit" onClick={() => handleButtonClick(page.route)}>
            {page.name}
          </Button>
        ))}
      </Stack>
    </AppBar>
  );
};

export default NavigationBar;
