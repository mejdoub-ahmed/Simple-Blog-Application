import React from "react";

export default function Footer() {
 

  return (
    <div>
      <>
        <footer
          className="bg-dark text-center text-white"
           style={{ bottom: 0, width: "100%" }}
        >
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            &copy; {new Date().getFullYear()} Copyright:
            <a
              className="text-white"
              href="https://github.com/mejdoub-ahmed/Simple-Blog-Application"
            >
              Blog Application
            </a>
          </div>
        </footer>
      </>
    </div>
  );
}
