import { useEffect, useRef, useState } from 'react';
import { Popover } from '@headlessui/react';
import clsx from 'clsx';

const sections = [
  { id: 'rrethproduktit', title: 'Rreth Produktit' },
  { id: 'perdorimi', title: 'Si ta përdorim' },
  { id: 'shporta', title: 'Shporta e blerjes' },
  { id: 'shkarkolibrin', title: 'Libri per humbje peshe' },
];

export function NavBar() {
  const navBarRef = useRef();
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const updateActiveIndex = () => {
      const offsets = sections.map(section => {
        const element = document.getElementById(section.id);
        return element ? element.offsetTop : 0;
      });

      const pageOffset = window.pageYOffset + (navBarRef.current ? navBarRef.current.offsetHeight : 0);
      const lastIndex = offsets.length - 1;

      const newActiveIndex = offsets.findIndex((offset, index) => {
        const nextOffset = index < lastIndex ? offsets[index + 1] : Number.POSITIVE_INFINITY;
        return pageOffset >= offset && pageOffset < nextOffset;
      });

      setActiveIndex(newActiveIndex);
    };

    updateActiveIndex();
    window.addEventListener('resize', updateActiveIndex);
    window.addEventListener('scroll', updateActiveIndex, { passive: true });

    return () => {
      window.removeEventListener('resize', updateActiveIndex);
      window.removeEventListener('scroll', updateActiveIndex);
    };
  }, []);

  return (
    <div ref={navBarRef} className="sticky top-0 z-50">
      <Popover className="sm:hidden">
        {({ open }) => (
          <>
            <div
              className={clsx('relative flex items-center py-3 px-4', {
                'bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur': !open,
              })}
            >
              {!open && activeIndex !== -1 && (
                <>
                  <span aria-hidden="true" className="font-mono text-sm text-green-600">
                    {(activeIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-slate-900">
                    {sections[Math.max(0, activeIndex)].title}
                  </span>
                </>
              )}
              <Popover.Button className={clsx('-mr-1 ml-auto flex h-8 w-8 items-center justify-center', { 'relative z-10': open })}>
                {!open && <span className="absolute inset-0" />}
                <span className="sr-only">Toggle navigation</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 stroke-slate-700"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={open ? 'M17 7 7 17M7 7l10 10' : 'm15 16-3 3-3-3M15 8l-3-3-3 3'}
                />
              </Popover.Button>
            </div>
            <Popover.Panel className="absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
              {({ close }) => sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center py-1.5 px-4"
                  onClick={() => {
                    setActiveIndex(index);
                    close();
                  }}
                >
                  <span aria-hidden="true" className="font-mono text-sm text-green-600">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-slate-900">
                    {section.title}
                  </span>
                </a>
              ))}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol className="-mb-[2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]">
          {sections.map((section, index) => (
            <li key={section.id} className="flex [counter-increment:section]">
              <a
                href={`#${section.id}`}
                className={clsx(
                  'flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]',
                  {
                    'border-green-600 bg-green-50 text-green-600 before:text-green-600': index === activeIndex,
                    'border-transparent before:text-slate-500 hover:bg-green-50/40 hover:before:text-slate-900': index !== activeIndex,
                  }
                )}
                onClick={() => setActiveIndex(index)}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
