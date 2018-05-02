// import { configure, mount } from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
// import * as React from 'react';

// import { addClass, getClassList, removeClass } from './classList';

// configure({ adapter: new Adapter() });

// test('getClassList() returns the class list of the element', () => {
//   const citeId = 'this is a test string';
//   const classes = ['my-first-class', 'second-class'];
//   const attachTo = document.createElement('div');
//   document.body.appendChild(attachTo);
//   mount(
//     <div>
//       <span x-cite-d={citeId} className={classes.join(' ')}>
//         Content
//       </span>
//     </div>,
//     {
//       attachTo,
//     }
//   );

//   const result = getClassList(attachTo.querySelector('[x-cite-d]'));
//   expect(result).not.toBeNull();
//   expect(Array.from(result!).join(' ')).toBe(classes.join(' '));
//   attachTo.remove();
// });

// test('addClass() should add a class to the classList', () => {
//   const citeId = 'this is a test string';
//   const classes = ['my-first-class', 'second-class'];
//   const attachTo = document.createElement('div');
//   document.body.appendChild(attachTo);
//   mount(
//     <div>
//       <span x-cite-d={citeId} className={classes.join(' ')}>
//         Content
//       </span>
//     </div>,
//     {
//       attachTo,
//     }
//   );

//   const citeElement = attachTo.querySelector('[x-cite-d]');
//   addClass(citeElement, 'invalid');
//   expect(Array.from(citeElement!.classList)).toEqual([...classes, 'invalid']);
//   attachTo.remove();
// });

// test('removeClass() should remove a class from the classList', () => {
//   const citeId = 'this is a test string';
//   const classes = ['my-first-class', 'second-class'];
//   const attachTo = document.createElement('div');
//   document.body.appendChild(attachTo);
//   mount(
//     <div>
//       <span x-cite-d={citeId} className={classes.join(' ')}>
//         Content
//       </span>
//     </div>,
//     {
//       attachTo,
//     }
//   );

//   const citeElement = attachTo.querySelector('[x-cite-d]');
//   removeClass(citeElement, 'second-class');
//   expect(Array.from(citeElement!.classList)).toEqual(
//     classes.filter(val => val !== 'second-class')
//   );
//   attachTo.remove();
// });
