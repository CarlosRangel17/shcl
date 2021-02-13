import { useEffect, useState } from "react";

const useKeyPress = (targetKey: KeyboardEvent) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  const keydownHandler = (key: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  // If released key is our target key then set to false
  //   const keyupHandler = (key: KeyboardEvent) => {
  //     if (key === targetKey) {
  //       setKeyPressed(false);
  //     }
  //   };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);
    //   window.addEventListener('keyup', keyupHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", keydownHandler);
      // window.removeEventListener('keyup', keyupHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};

export default useKeyPress;
