import { h, Fragment } from 'preact';
import { Listbox as HeadlessListbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const Listbox = ({ 
  value, 
  onChange, 
  options = [], 
  placeholder = "Select an option",
  disabled = false,
  error = false,
  className = ""
}) => {
  const selectedOption = options.find(option => option.value === value);

  return (
    <HeadlessListbox value={value} onChange={onChange} disabled={disabled}>
      <div className={`relative ${className}`}>
        <HeadlessListbox.Button 
          className={`relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 sm:text-sm ${
            error ? 'border-red-300 ring-red-500' : 'border-gray-300'
          } ${disabled ? 'bg-gray-50 text-gray-500' : ''}`}
        >
          <span className="block truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </HeadlessListbox.Button>
        
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <HeadlessListbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <HeadlessListbox.Option
                key={option.value}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-primary-100 text-primary-900' : 'text-gray-900'
                  }`
                }
                value={option.value}
                disabled={option.disabled}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </HeadlessListbox.Option>
            ))}
          </HeadlessListbox.Options>
        </Transition>
      </div>
    </HeadlessListbox>
  );
};

export default Listbox;
