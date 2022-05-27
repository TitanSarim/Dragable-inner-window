import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

    const style = {color: "white"}

  return (
    <Menu as="div" className="relative inline-block text-left z-30">
      <div>    
            <Menu.Button className="grid inline-block">
                <div class="flex bg-sky-400 cursor-pointer mt-12  h-14 px-3 py-1.5 w-28 p-4 rounded-l-full transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                    <div className='grid justify-items-center mt-1.2 ml-4 '>
                        <FaTwitter style={style} size={35} className="mt-1"/>
                        <RiArrowDropDownLine size={40} className="-mr-12 ml-6 -mt-9 " aria-hidden="true"  style={style}/>
                    </div>
                </div>   
            </Menu.Button>                    
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-left absolute left-28 mt-2 w-20 rounded-lg shadow-lg bg-slate-200 ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 rounded-lg  text-gray-900' : 'text-gray-700 ',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Tweet
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 rounded-lg text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Image
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 rounded-lg  text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Text
                </a>
              )}
            </Menu.Item>
    
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}