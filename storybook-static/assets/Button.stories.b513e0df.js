var c=Object.defineProperty;var e=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var a=(n,o,t)=>o in n?c(n,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[o]=t,l=(n,o)=>{for(var t in o||(o={}))i.call(o,t)&&a(n,t,o[t]);if(e)for(var t of e(o))p.call(o,t)&&a(n,t,o[t]);return n};import{B as s}from"./Button.490d214f.js";import{j as d}from"./jsx-runtime.bd940121.js";import"./index.d1b1a1f8.js";var f={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:s,argTypes:{backgroundColor:{control:"color"}}};const r=n=>d(s,l({},n)),m=r.bind({});m.args={primary:!0,label:"Button"};const g=r.bind({});g.args={label:"Button"};const y=r.bind({});y.args={size:"large",label:"Button"};const u=r.bind({});u.args={size:"small",label:"Button"};const S=["Primary","Secondary","Large","Small"];export{y as Large,m as Primary,g as Secondary,u as Small,S as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories.b513e0df.js.map
