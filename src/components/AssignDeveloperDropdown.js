import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const AssignDeveloperDropdown = (props) => {
  return (
    <div className={`${props.showControls}`}>
      <Menu as="div" className="relative inline-block">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className={`mr-1 border border-dashed border-gray-400 hover:bg-blue-300 hover:border-gray-700 hover:text-gray-700 rounded-lg inline-flex justify-center items-center h-8 w-8 text-sm font-medium text-${props.menufg} bg-${props.menubg} rounded-${props.rounded} bg-opacity-20 hover:bg-opacity-30 ${props.hover} focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                {props.icon}
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className={`absolute ${props.alignMenu}-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                {
                  // props.menuItems.map((item, index) => {
                    // return (
                      <div className="px-1 py-1 ">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active ? "bg-gray-300" : `text-gray-900'`
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    onClick={() => props.handleAssignDeveloper()}
                                  >
                                    None
                                  </button>
                                )}
                              </Menu.Item>
                        {
                          props.menuItems.map((el, i) => {
                            return (
                              <Menu.Item key={i}>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active ? "bg-gray-300" : `text-${el.textfg ? el.textfg : 'gray-900'}`
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    onClick={() => props.handleAssignDeveloper(el.id)}
                                  >
                                    {el.username}
                                  </button>
                                )}
                              </Menu.Item>
                            )
                          })
                        }
                      </div>
                    // )
                  // })
                }
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}