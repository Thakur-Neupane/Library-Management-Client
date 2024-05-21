import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiBookshelf } from "react-icons/gi";
import { PiStudentThin } from "react-icons/pi";
import { FaList } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const sideLinks = [
  {
    icon: <GiBookshelf />,
    title: "Book",
    to: "/admin/books",
    isAdminOnly: true,
  },
  {
    icon: <PiStudentThin />,
    title: "Students",
    to: "/admin/students",
    isAdminOnly: true,
  },
  {
    icon: <FaList />,
    title: "All Burrows",
    to: "/admin/all-burrows",
    isAdminOnly: true,
  },
  {
    icon: <FaBookOpen />,
    title: "My Book",
    to: "/admin/my-book",
  },
  {
    icon: <FaUser />,
    title: "Profile",
    to: "/admin/profil",
  },
  {
    icon: <RiAdminFill />,
    title: "Admins",
    to: "/admin/admins",
    isAdminOnly: true,
  },
];

export const UserSidebar = () => {
  const { user } = useSelector((state) => state.userInfo);

  const list =
    user.role === "admin"
      ? sideLinks
      : sideLinks.filter((itm) => !itm.isAdminOnly);

  return (
    <Stack gap={1}>
      {list.map(({ title, to, icon }) => (
        <Link key={title} to={to} className="p-2 nav-link">
          {icon} {title}
        </Link>
      ))}
    </Stack>
  );
};
