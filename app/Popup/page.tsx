"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CopyableCode from "../components/CopyableCode";
import { Card, Button, Popup } from "pixel-retroui";
import { themeColors, ThemeOptions } from "../themes";

function Page() {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState<ThemeOptions | "custom">(
    "pop"
  );
  const [customColors, setCustomColors] = useState({
    bg: "#ffffff",
    text: "#000000",
    border: "#000000",
    shadow: "#000000",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleThemeChange = (theme: ThemeOptions | "custom") => {
    setSelectedTheme(theme);
  };

  const handleCustomColorChange = (colorType: string, color: string) => {
    setCustomColors((prev) => ({ ...prev, [colorType]: color }));
    setSelectedTheme("custom");
  };

  const getPopupCode = () => {
    const colors =
      selectedTheme === "custom"
        ? customColors
        : themeColors[selectedTheme as ThemeOptions];
    return `const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  
  <Button onClick={openPopup}>Open Popup</Button>
  
  <Popup
    isOpen={isPopupOpen}
    onClose={closePopup}
    bg="${colors.bg}"
    baseBg="${colors.shadow}"
    textColor="${colors.text}"
    borderColor="${colors.border}"
  >
    Your popup content here
  </Popup>`;
  };

  return (
    <main className="flex z-10 min-h-screen font-minecraft flex-col w-full gap-10 p-10 xl:p-32 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/e7/50/86/e750869f635c22314b470aafd09f28e3.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/c7/01/d4/c701d4e1b03d0944a258d93eda8e0fe6.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Header and navigation buttons */}
      <button
        className="flex w-56 top-5 gap-1 left-8 absolute"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src="/logo.png" className="" alt="logo" width={25} height={25} />
        <h1 className="font-minecraft-bold">RetroUI</h1>
      </button>
      <div
        className="p-0 flex cursor-pointer top-5 gap-1 right-8 absolute"
        onClick={() => {
          window.open("https://github.com/Dksie09/RetroUI", "_blank");
        }}
      >
        <div className="flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M21 5L20 5 19 5 19 3 18 3 17 3 15 3 15 5 14 5 13 5 13 8 12 8 11 8 11 6 11 5 9 5 9 3 7 3 6 3 5 3 5 5 3 5 3 14 5 14 5 16 7 16 7 18 10 18 10 21 12 21 14 21 14 18 17 18 17 16 19 16 19 14 21 14z"></path>
          </svg>
          Star the repo
        </div>
      </div>

      <button
        className="absolute top-20 left-8 underline font-minecraft text-sm flex items-center"
        onClick={() => router.push("/components")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Components
      </button>

      <div className="">
        <h1 className="font-minecraft-bold text-5xl">Popup</h1>
        <p className="mt-4">
          A customizable, pixel-art styled popup component for displaying modal
          content.
        </p>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Basic Usage</h1>
          <CopyableCode
            code={`import React, { useState } from 'react';
import { Button, Popup } from 'pixel-retroui';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <Button onClick={openPopup}>Open Popup</Button>

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
      >
        Your popup content here
      </Popup>
    </div>
  );
}`}
          />
        </div>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">Props</h1>
          <Card className="w-full overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Prop</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Default</th>
                  <th className="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">isOpen</td>
                  <td className="px-4 py-2">boolean</td>
                  <td className="px-4 py-2">false</td>
                  <td className="px-4 py-2">
                    Controls whether the popup is visible
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">onClose</td>
                  <td className="px-4 py-2">function</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">
                    Function to call when closing the popup
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">bg</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#ffffff&apos;</td>
                  <td className="px-4 py-2">
                    Background color of the popup content
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">baseBg</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#f0f0f0&apos;</td>
                  <td className="px-4 py-2">
                    Background color of the popup container
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">textColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#000000&apos;</td>
                  <td className="px-4 py-2">Text color of the popup content</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">borderColor</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;#000000&apos;</td>
                  <td className="px-4 py-2">Border color of the popup</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">className</td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">&apos;&apos;</td>
                  <td className="px-4 py-2">
                    Additional CSS classes to apply to the popup
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="mt-20">
          <h1 className="font-minecraft-bold text-lg ml-2">Custom Popup</h1>
          <p className="text-sm ml-2 mb-6">
            Customize your popup&apos;s appearance by selecting a preset theme
            or creating your own color scheme.
          </p>
          <Card
            className={`w-full min-h-56 relative ${
              String(selectedTheme) === "dark" ? "bg-black text-white" : ""
            }`}
          >
            {/* Theme selection and custom color inputs */}
            <div className="flex justify-between">
              <div className="flex flex-col gap-1 absolute top-0 left-0">
                <p>Theme:</p>
                {Object.keys(themeColors).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => handleThemeChange(theme as ThemeOptions)}
                    className={`p-3 h-1 w-1 rounded-full border ${
                      theme === selectedTheme ? "ring-2 ring-blue-500" : ""
                    }`}
                    style={{
                      borderColor: themeColors[theme as ThemeOptions].border,
                      backgroundColor: themeColors[theme as ThemeOptions].bg,
                    }}
                  ></button>
                ))}
                <button onClick={() => handleThemeChange("custom")}>
                  <img
                    src="./custom.png"
                    className="h-6 w-6"
                    alt="Custom colors"
                  />
                </button>
              </div>
              {selectedTheme === "custom" && (
                <div className="flex flex-col gap-2 items-end absolute top-0 right-0">
                  <div className="flex">
                    <p>Bg color</p>
                    <input
                      type="color"
                      value={customColors.bg}
                      className="h-6 w-6"
                      onChange={(e) =>
                        handleCustomColorChange("bg", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex">
                    <p>Text color</p>
                    <input
                      type="color"
                      value={customColors.text}
                      className="h-6 w-6"
                      onChange={(e) =>
                        handleCustomColorChange("text", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex">
                    <p>Border color</p>
                    <input
                      type="color"
                      value={customColors.border}
                      className="h-6 w-6"
                      onChange={(e) =>
                        handleCustomColorChange("border", e.target.value)
                      }
                    />
                  </div>
                </div>
              )}
            </div>
            {/* ... (similar to previous components) ... */}

            <div className="flex justify-center items-center my-24">
              <Button
                onClick={() => setIsPopupOpen(true)}
                bg={
                  selectedTheme === "custom"
                    ? customColors.bg
                    : themeColors[selectedTheme as ThemeOptions].bg
                }
                textColor={
                  selectedTheme === "custom"
                    ? customColors.text
                    : themeColors[selectedTheme as ThemeOptions].text
                }
                borderColor={
                  selectedTheme === "custom"
                    ? customColors.border
                    : themeColors[selectedTheme as ThemeOptions].border
                }
                shadow={
                  selectedTheme === "custom"
                    ? customColors.border
                    : themeColors[selectedTheme as ThemeOptions].shadow
                }
              >
                Open Popup
              </Button>
              <Popup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                bg={
                  selectedTheme === "custom"
                    ? customColors.bg
                    : themeColors[selectedTheme as ThemeOptions].bg
                }
                baseBg={
                  selectedTheme === "custom"
                    ? customColors.shadow
                    : themeColors[selectedTheme as ThemeOptions].shadow
                }
                textColor={
                  selectedTheme === "custom"
                    ? customColors.text
                    : themeColors[selectedTheme as ThemeOptions].text
                }
                borderColor={
                  selectedTheme === "custom"
                    ? customColors.border
                    : themeColors[selectedTheme as ThemeOptions].border
                }
              >
                <h2 className="text-xl mb-4">Themed Popup Content</h2>
                <p>This is a customized popup with themed colors.</p>
              </Popup>
            </div>
            <div className="mt-4">
              <CopyableCode code={getPopupCode()} />
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <h1 className="font-minecraft-bold text-lg ml-2">
            Additional Examples
          </h1>

          <h2 className="font-minecraft text-md ml-2 mt-4">With Form</h2>
          <CopyableCode
            code={`<Popup isOpen={isOpen} onClose={closePopup}>
  <form onSubmit={handleSubmit}>
    <Input placeholder="Username" />
    <Input type="password" placeholder="Password" />
    <Button type="submit">Login</Button>
  </form>
</Popup>`}
          />
        </div>
      </div>
    </main>
  );
}

export default Page;
