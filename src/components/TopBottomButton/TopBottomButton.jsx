import React from "react";

const TopBottomButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
      <button
        onClick={scrollToTop}
        className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700"
      >
        ↑ Top
      </button>
      <button
        onClick={scrollToBottom}
        className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700"
      >
        ↓ Bottom
      </button>
    </div>
  );
};

export default TopBottomButton;
