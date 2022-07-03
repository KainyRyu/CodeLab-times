var l=Object.defineProperty;var t=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(n,e,o)=>e in n?l(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,a=(n,e)=>{for(var o in e||(e={}))c.call(e,o)&&r(n,o,e[o]);if(t)for(var o of t(e))p.call(e,o)&&r(n,o,e[o]);return n};import{H as s}from"./Header.7b5d5bdb.js";import{j as m}from"./jsx-runtime.bd940121.js";import"./Button.490d214f.js";import"./index.d1b1a1f8.js";var x={title:"Example/Header",component:s,parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}},"logged-out":{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}}}},layout:"fullscreen"}};const d=n=>m(s,a({},n)),g=d.bind({});g.args={user:{name:"Jane Doe"}};const i=d.bind({});i.args={};const b=["LoggedIn","LoggedOut"];export{g as LoggedIn,i as LoggedOut,b as __namedExportsOrder,x as default};
//# sourceMappingURL=Header.stories.48f201ff.js.map
