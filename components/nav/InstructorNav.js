import Link from "next/link";
import React, { useEffect, useState } from "react";

const InstructorNav = () => {
  const [current, setCurrent] = useState("");
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills mt-2">
      <Link href={"/instructor"}>
        <a className={`nav-link ${current === "/instructor" && "active"}`}>
          Dashboard
        </a>
      </Link>
      <Link href={"/instructor/course/create"}>
        <a
          className={`nav-link ${
            current === "/instructor/course/create" && "active"
          }`}
        >
          Crouse Create
        </a>
      </Link>
      <Link href={"/instructor/revenue"}>
        <a
          className={`nav-link ${
            current === "/instructor/revenue" && "active"
          }`}
        >
          Revenue
        </a>
      </Link>
    </div>
  );
};

export default InstructorNav;
