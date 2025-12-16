import React from 'react';
import clsx from 'clsx';

const HoverButton = ({ type = 'black', children, disabled = false, groupHover = false }) => {
    const hoverTextClass = groupHover
    ? (type === 'black' ? 'group-hover:text-white' : 'group-hover:text-black')
    : (type === 'black' ? 'hover:text-white' : 'hover:text-black');

  return (
    <button
      className={clsx(
        'relative z-[1] flex overflow-hidden box-border items-center justify-center px-[35px] py-[13px] cursor-pointer text-base font-normal tracking-widest uppercase transition-colors duration-300 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:transition-all before:duration-300 before:ease-out before:z-[-1]',
        {
          'bg-black/25 border border-black text-black before:bg-black hover:text-white': type === 'black' && !disabled,
          'bg-white/25 border border-white text-white before:bg-white hover:text-black': type === 'white' && !disabled,
          'pointer-events-none cursor-default border border-gray-200 bg-gray-200 text-white': disabled,
        },
        groupHover ? 'group-hover:before:left-0' : 'hover:before:left-0',
        hoverTextClass
      )}
    >
      {children}
    </button>
  );
};

export default HoverButton;
