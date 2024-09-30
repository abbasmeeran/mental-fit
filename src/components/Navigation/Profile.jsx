import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";

import { Link } from "react-router-dom";

const userNavigation = [{ name: "Sign out", href: "#" }];

const Profile = ({ profile, logout }) => {
  return (
    profile && (
      <div className="ml-4 flex items-center md:ml-6">
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <img
                alt=""
                src={profile.picture}
                className="h-8 w-8 rounded-full"
              />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md 
            bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
          >
            {userNavigation.map((item) => (
              <MenuItem key={item.name}>
                <Link
                  onClick={logout}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  {item.name}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    )
  );
};

export default Profile;
