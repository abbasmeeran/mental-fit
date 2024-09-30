import React from "react";
import { Disclosure } from "@headlessui/react";
import NavigationLinks from "./NavigationLinks";
import Profile from "./Profile";
import GoogleLogin from "../GoogleLogin";

const Navigation = (props) => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                alt="Mental Fit"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-8"
              />
            </div>
            <div>
              <div className="ml-10 flex items-baseline space-x-4">
                <NavigationLinks />
              </div>
            </div>
          </div>
          <GoogleLogin />
        </div>
      </div>
    </Disclosure>
  );
};

export default Navigation;
