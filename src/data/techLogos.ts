export interface SphereTech {
  name: string;
  svg: string;
  color: string;
}

// ── SVG icon strings ────────────────────────────────────────────────────────

const HTML_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28px" height="32px" viewBox="0 0 26 29" version="1.1">
<g id="surface1">
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(89.411765%,30.19608%,14.901961%);fill-opacity:1;" d="M 26 0.0625 L 23.632812 26.046875 L 12.984375 28.9375 L 2.367188 26.054688 L 0 0.0625 Z M 26 0.0625 "/>
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(94.509804%,39.607844%,16.078432%);fill-opacity:1;" d="M 13 26.730469 L 21.605469 24.394531 L 23.625 2.183594 L 13 2.183594 Z M 13 26.730469 "/>
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(92.156863%,92.156863%,92.156863%);fill-opacity:1;" d="M 8.394531 8.5625 L 13 8.5625 L 13 5.375 L 4.835938 5.375 L 4.914062 6.230469 L 5.714844 15.015625 L 12.996094 15.015625 L 12.996094 11.824219 L 8.695312 11.824219 Z M 9.128906 16.609375 L 5.863281 16.609375 L 6.316406 21.613281 L 12.988281 23.425781 L 13 23.421875 L 13 20.105469 L 12.988281 20.109375 L 9.359375 19.152344 Z M 9.128906 16.609375 "/>
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 12.988281 15.015625 L 16.996094 15.015625 L 16.621094 19.148438 L 12.988281 20.105469 L 12.988281 23.421875 L 19.664062 21.613281 L 19.710938 21.074219 L 20.476562 12.679688 L 20.554688 11.824219 L 12.988281 11.824219 Z M 12.988281 8.554688 L 12.988281 8.5625 L 20.851562 8.5625 L 20.914062 7.84375 L 21.0625 6.226562 L 21.140625 5.371094 L 12.988281 5.371094 Z M 12.988281 8.554688 "/>
</g>
</svg>`;

const CSS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="30px" viewBox="0 0 27 30" version="1.1">
<defs>
<filter id="alpha" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%">
  <feColorMatrix type="matrix" in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
</filter>
<image id="image7" width="27" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAAABmJLR0QA/wD/AP+gvaeTAAAAoklEQVRIiWNgGAWjYBQMK8CITfD/Zw1RBvY6JZy6/lQ8ZeR69IRUy1iwinLoqjEwzk3CqYtNfhMDA7Us+/9PlYHxAG7L/v95zMDAuJFKlln/YWC4/BW3NqNfpFqE2zIGxz8MDPvwWCb8m4HhPJUsY7b9w8CQiduy/2q/GBgWkmwZ9tT4/bcCAyuHKU5df4WuMrK/vkaybaNgFIyCUTAKRhAAAJYLKDUSKOEYAAAAAElFTkSuQmCC"/>
<mask id="mask0">
  <g filter="url(#alpha)">
<use xlink:href="#image7"/>
  </g>
</mask>
<clipPath id="clip1">
  <rect x="0" y="0" width="27" height="30"/>
</clipPath>
<g id="surface6" clip-path="url(#clip1)">
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(81.960784%,82.745098%,83.137255%);fill-opacity:1;" d="M 5.640625 12.195312 L 5.898438 15.390625 L 13.488281 12.1875 L 13.488281 8.964844 Z M 5.640625 12.195312 "/>
</g>
<image id="image13" width="27" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAAABmJLR0QA/wD/AP+gvaeTAAAAk0lEQVRIiWNgGAWjYLAARnI0/f/FbMzAYKKPW0H5D0b2oGXowizkWMbAwGDMwLg5DqcsY/x7BgYGKlnG+FSWgVHVHLcC71fYRMn0mf4vBgaVr7jl1b9R0TKd3wwMwlgNZGBgYGD4r/6dipZZ/mJgYMXjMz0q+uyH3BIGtuodOOX/8/wly9xRMApGwSgYBaNgFKACABNQG+Hrp+28AAAAAElFTkSuQmCC"/>
<mask id="mask1">
  <g filter="url(#alpha)">
<use xlink:href="#image13"/>
  </g>
</mask>
<clipPath id="clip2">
  <rect x="0" y="0" width="27" height="30"/>
</clipPath>
<g id="surface12" clip-path="url(#clip2)">
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(81.960784%,82.745098%,83.137255%);fill-opacity:1;" d="M 21.898438 5.507812 L 13.488281 8.964844 L 13.488281 12.1875 L 21.5625 8.777344 Z M 21.898438 5.507812 "/>
</g>
<linearGradient id="linear0" gradientUnits="userSpaceOnUse" x1="62019.300781" y1="202868" x2="233515" y2="202868" gradientTransform="matrix(0.0000911248,0,0,0.0000900001,0,0)">
<stop offset="0" style="stop-color:rgb(90.980392%,90.588235%,89.803922%);stop-opacity:1;"/>
<stop offset="1" style="stop-color:rgb(100%,100%,100%);stop-opacity:1;"/>
</linearGradient>
<linearGradient id="linear1" gradientUnits="userSpaceOnUse" x1="54128.699219" y1="79355.5" x2="240318" y2="79355.5" gradientTransform="matrix(0.0000911248,0,0,0.0000900001,0,0)">
<stop offset="0" style="stop-color:rgb(90.980392%,90.588235%,89.803922%);stop-opacity:1;"/>
<stop offset="1" style="stop-color:rgb(100%,100%,100%);stop-opacity:1;"/>
</linearGradient>
</defs>
<g id="surface1">
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(12.54902%,38.431373%,68.627453%);fill-opacity:1;" d="M 24.46875 27.082031 L 13.5 30 L 2.53125 27.082031 L 0 0 L 27 0 Z M 24.46875 27.082031 "/>
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(23.529412%,61.176473%,84.313726%);fill-opacity:1;" d="M 13.5 2.195312 L 13.5 27.671875 L 13.523438 27.679688 L 22.402344 25.320312 L 24.449219 2.195312 Z M 13.5 2.195312 "/>
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 13.488281 8.964844 L 5.640625 12.195312 L 5.898438 15.390625 L 13.488281 12.1875 L 21.5625 8.777344 L 21.898438 5.507812 Z M 13.488281 8.964844 "/>
<use xlink:href="#surface6" mask="url(#mask0)"/>
<use xlink:href="#surface12" mask="url(#mask1)"/>
<path style=" stroke:none;fill-rule:evenodd;fill:url(#linear0);" d="M 5.652344 12.195312 L 5.910156 15.390625 L 17.558594 15.429688 L 17.296875 19.691406 L 13.464844 20.757812 L 9.78125 19.839844 L 9.558594 17.191406 L 6.136719 17.191406 L 6.582031 22.300781 L 13.503906 24.320312 L 20.386719 22.335938 L 21.277344 12.195312 Z M 5.652344 12.195312 "/>
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:0.0509804;" d="M 13.488281 12.195312 L 5.640625 12.195312 L 5.898438 15.390625 L 13.488281 15.414062 Z M 13.488281 20.746094 L 13.453125 20.757812 L 9.769531 19.839844 L 9.546875 17.191406 L 6.125 17.191406 L 6.570312 22.300781 L 13.488281 24.320312 Z M 13.488281 20.746094 "/>
<path style=" stroke:none;fill-rule:evenodd;fill:url(#linear1);" d="M 4.933594 5.507812 L 21.898438 5.507812 L 21.5625 8.777344 L 5.339844 8.777344 Z M 4.933594 5.507812 "/>
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:0.0509804;" d="M 13.488281 5.507812 L 4.933594 5.507812 L 5.339844 8.777344 L 13.488281 8.777344 Z M 13.488281 5.507812 "/>
</g>
</svg>`

const JS_SVG = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <rect width="30" height="30" fill="#F7DF1E"/>
  <path d="M17 21.3c.5.8 1.1 1.5 2.2 1.5 1 0 1.6-.5 1.6-1.1 0-.8-.6-1-1.7-1.5l-.6-.2c-1.6-.7-2.7-1.6-2.7-3.4 0-1.7 1.3-2.9 3.3-2.9 1.4 0 2.5.5 3.2 1.8l-1.7 1.1c-.4-.7-.8-1-1.4-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.4 1.4l.6.2c1.9.8 3 1.7 3 3.5 0 2-1.6 3.1-3.7 3.1-2.1 0-3.5-1-4.1-2.3l1.7-1.2z" fill="#323330"/>
  <path d="M8.8 21.6c.4.7.8 1.3 1.6 1.3.7 0 1.1-.3 1.1-1.4v-7.3h2.1v7.4c0 2.2-1.3 3.2-3.1 3.2-1.7 0-2.7-.9-3.2-2l1.5-1.2z" fill="#323330"/>
</svg>`;

const TS_SVG = `<svg width="28" height="28" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <rect width="28" height="28" fill="#3178C6"/>
  <path d="M6 16.5h3.7v-2.25H1.5v2.25H5.2v10.5H6z" fill="white"/>
  <path d="M16.5 14.25c-2.9 0-4.9 1.6-4.9 4 0 2.1 1.3 3.2 3.4 4l1.3.4c1.3.5 1.9.9 1.9 1.7 0 .8-.7 1.4-1.9 1.4-1.3 0-2.2-.6-2.8-1.8l-1.9 1.1c.9 2 2.7 3 4.7 3 2.9 0 5-1.5 5-4.1 0-2-1.2-3.1-3.6-4l-1.3-.5c-1.2-.5-1.7-.9-1.7-1.5 0-.7.6-1.2 1.6-1.2s1.6.4 2.2 1.3l1.7-1.1c-.8-1.4-2.2-2.1-3.7-2.1z" fill="white"/>
</svg>`;

const REACT_SVG = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="15" r="2.2" fill="#61DAFB"/>
  <ellipse cx="15" cy="15" rx="13.5" ry="4.5" fill="none" stroke="#61DAFB" stroke-width="1.4"/>
  <ellipse cx="15" cy="15" rx="13.5" ry="4.5" fill="none" stroke="#61DAFB" stroke-width="1.4" transform="rotate(60 15 15)"/>
  <ellipse cx="15" cy="15" rx="13.5" ry="4.5" fill="none" stroke="#61DAFB" stroke-width="1.4" transform="rotate(120 15 15)"/>
</svg>`;

const NEXTJS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 30 30" version="1.1">
<defs>
<linearGradient id="linear0" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0" gradientTransform="matrix(5.893541,7.304728,-7.304728,5.893541,18.13808,19.378482)">
<stop offset="0" style="stop-color:rgb(100%,100%,100%);stop-opacity:1;"/>
<stop offset="1" style="stop-color:rgb(100%,100%,100%);stop-opacity:0;"/>
</linearGradient>
<linearGradient id="linear1" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0" gradientTransform="matrix(-0.0333995,8.778076,-8.778076,-0.0333995,20.130106,9.0026)">
<stop offset="0" style="stop-color:rgb(100%,100%,100%);stop-opacity:1;"/>
<stop offset="1" style="stop-color:rgb(100%,100%,100%);stop-opacity:0;"/>
</linearGradient>
</defs>
<g id="surface1">
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 29.925781 14.980469 C 29.925781 6.726562 23.234375 0.0390625 14.984375 0.0390625 C 6.730469 0.0390625 0.0429688 6.726562 0.0429688 14.980469 C 0.0429688 23.230469 6.730469 29.921875 14.984375 29.921875 C 23.234375 29.921875 29.925781 23.230469 29.925781 14.980469 Z M 29.925781 14.980469 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:url(#linear0);" d="M 24.863281 26.1875 L 11.519531 9.003906 L 9.007812 9.003906 L 9.007812 20.949219 L 11.019531 20.949219 L 11.019531 11.554688 L 23.285156 27.402344 C 23.835938 27.035156 24.363281 26.628906 24.863281 26.1875 Z M 24.863281 26.1875 "/>
<path style=" stroke:none;fill-rule:evenodd;fill:url(#linear1);" d="M 19.132812 9.003906 L 21.125 9.003906 L 21.125 20.957031 L 19.132812 20.957031 Z M 19.132812 9.003906 "/>
</g>
</svg>`;

const REDUX_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="30px" viewBox="0 0 31 30" version="1.1">
<g id="surface1">
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(46.27451%,29.019609%,73.725492%);fill-opacity:1;" d="M 21.480469 20.953125 C 22.625 20.832031 23.492188 19.824219 23.453125 18.621094 C 23.414062 17.414062 22.425781 16.449219 21.242188 16.449219 L 21.164062 16.449219 C 19.941406 16.488281 18.996094 17.535156 19.035156 18.78125 C 19.074219 19.382812 19.308594 19.90625 19.664062 20.269531 C 18.324219 22.960938 16.273438 24.933594 13.195312 26.582031 C 11.105469 27.707031 8.933594 28.109375 6.765625 27.828125 C 4.988281 27.585938 3.609375 26.78125 2.742188 25.457031 C 1.480469 23.484375 1.359375 21.355469 2.425781 19.222656 C 3.175781 17.695312 4.359375 16.566406 5.109375 16.003906 C 4.949219 15.484375 4.714844 14.597656 4.59375 13.953125 C -1.125 18.175781 -0.53125 23.886719 1.203125 26.582031 C 2.503906 28.59375 5.148438 29.839844 8.066406 29.839844 C 8.855469 29.839844 9.644531 29.757812 10.433594 29.558594 C 15.484375 28.550781 19.308594 25.496094 21.480469 20.953125 Z M 28.421875 15.964844 C 25.425781 12.386719 21.007812 10.414062 15.957031 10.414062 L 15.324219 10.414062 C 14.96875 9.691406 14.222656 9.210938 13.394531 9.210938 L 13.3125 9.210938 C 12.089844 9.25 11.144531 10.292969 11.183594 11.542969 C 11.222656 12.746094 12.210938 13.714844 13.394531 13.714844 L 13.472656 13.714844 C 14.339844 13.671875 15.089844 13.109375 15.40625 12.347656 L 16.113281 12.347656 C 19.113281 12.347656 21.953125 13.230469 24.515625 14.960938 C 26.488281 16.285156 27.910156 18.015625 28.699219 20.105469 C 29.371094 21.796875 29.332031 23.445312 28.621094 24.851562 C 27.515625 26.984375 25.660156 28.148438 23.214844 28.148438 C 21.636719 28.148438 20.136719 27.667969 19.347656 27.304688 C 18.914062 27.707031 18.125 28.351562 17.574219 28.753906 C 19.269531 29.558594 21.007812 30 22.664062 30 C 26.449219 30 29.25 27.867188 30.316406 25.738281 C 31.460938 23.40625 31.382812 19.382812 28.421875 15.964844 Z M 8.382812 21.636719 C 8.421875 22.839844 9.410156 23.808594 10.59375 23.808594 L 10.671875 23.808594 C 11.894531 23.765625 12.839844 22.722656 12.800781 21.472656 C 12.761719 20.269531 11.773438 19.304688 10.59375 19.304688 L 10.511719 19.304688 C 10.433594 19.304688 10.316406 19.304688 10.238281 19.34375 C 8.621094 16.609375 7.949219 13.632812 8.1875 10.414062 C 8.34375 8.003906 9.132812 5.910156 10.511719 4.183594 C 11.65625 2.695312 13.867188 1.96875 15.363281 1.929688 C 19.546875 1.851562 21.320312 7.15625 21.441406 9.289062 C 21.953125 9.410156 22.820312 9.691406 23.414062 9.894531 C 22.9375 3.378906 18.996094 0 15.207031 0 C 11.65625 0 8.382812 2.613281 7.082031 6.472656 C 5.265625 11.621094 6.449219 16.566406 8.660156 20.46875 C 8.460938 20.75 8.34375 21.191406 8.382812 21.636719 Z M 8.382812 21.636719 "/>
</g>
</svg>`;

const BOOTSTRAP_SVG = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <rect width="30" height="30" rx="6" fill="#7952B3"/>
  <path d="M8.5 6h8.2c1.9 0 3.4.4 4.4 1.3.9.8 1.4 1.9 1.4 3.1 0 1.4-.7 2.6-2 3.3 1.8.7 2.8 2 2.8 3.9 0 1.6-.6 2.9-1.7 3.8-1.2 1-3 1.5-5.3 1.5H8.5V6zm4.5 7h3.5c1.6 0 2.5-.6 2.5-1.9 0-1.2-.9-1.8-2.6-1.8H13v3.7zm0 7.2h4c2 0 3-.8 3-2.2s-1-2.1-3.1-2.1H13v4.3z" fill="white"/>
</svg>`;

const TAILWIND_SVG = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 6c-4 0-6.5 2-7.5 6 1.5-2 3.2-2.75 5.25-2.25 1.14.29 1.95 1.2 2.85 2.18C17.06 13.6 18.75 15.38 22.5 15.38c4 0 6.5-2 7.5-6-1.5 2-3.2 2.75-5.25 2.25-1.14-.29-1.95-1.2-2.85-2.18C20.44 7.78 18.75 6 15 6zM7.5 15.38c-4 0-6.5 2-7.5 6 1.5-2 3.2-2.75 5.25-2.25 1.14.29 1.95 1.2 2.85 2.18 1.41 1.67 3.1 3.44 6.9 3.44 4 0 6.5-2 7.5-6-1.5 2-3.2 2.75-5.25 2.25-1.14-.29-1.95-1.2-2.85-2.18-1.41-1.67-3.1-3.44-6.9-3.44z" fill="#06B6D4"/>
</svg>`;

const MUI_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 30 30" version="1.1">
<g id="surface1">
<path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,45.09804%,90.196079%);fill-opacity:1;" d="M 29.355469 7.265625 L 29.355469 2.46875 C 29.355469 2.242188 29.167969 2.058594 28.945312 2.058594 C 28.871094 2.058594 28.804688 2.078125 28.742188 2.113281 L 25.582031 3.917969 C 25.328125 4.0625 25.167969 4.335938 25.167969 4.628906 L 25.167969 9.425781 C 25.167969 9.742188 25.507812 9.941406 25.785156 9.78125 L 28.941406 7.980469 C 29.199219 7.832031 29.355469 7.558594 29.355469 7.265625 Z M 1.261719 2.113281 L 10.402344 7.355469 C 10.65625 7.5 10.96875 7.5 11.222656 7.355469 L 20.367188 2.113281 C 20.425781 2.078125 20.5 2.058594 20.570312 2.058594 C 20.796875 2.058594 20.980469 2.242188 20.980469 2.46875 L 20.980469 16.863281 C 20.980469 17.144531 20.839844 17.402344 20.601562 17.554688 L 15.039062 21.089844 L 18.757812 23.28125 C 19.023438 23.433594 19.351562 23.429688 19.609375 23.269531 L 25.125 19.824219 C 25.246094 19.75 25.316406 19.617188 25.316406 19.476562 L 25.316406 14.589844 C 25.316406 14.285156 25.484375 14.007812 25.75 13.863281 L 28.75 12.253906 C 28.808594 12.222656 28.875 12.207031 28.945312 12.207031 C 29.171875 12.207031 29.355469 12.390625 29.355469 12.617188 L 29.355469 21.625 C 29.355469 21.917969 29.199219 22.1875 28.949219 22.335938 L 19.578125 27.828125 C 19.3125 27.984375 18.988281 27.980469 18.726562 27.820312 L 11.605469 23.414062 C 11.484375 23.339844 11.410156 23.207031 11.410156 23.0625 L 11.410156 18.730469 C 11.410156 18.589844 11.480469 18.464844 11.59375 18.386719 L 16.425781 15.164062 C 16.65625 15.011719 16.792969 14.753906 16.792969 14.480469 L 16.792969 9.226562 C 16.792969 9.136719 16.722656 9.066406 16.628906 9.0625 C 16.601562 9.0625 16.570312 9.074219 16.546875 9.089844 L 11.234375 12.273438 C 10.976562 12.429688 10.652344 12.429688 10.390625 12.277344 L 5.003906 9.085938 C 4.980469 9.070312 4.949219 9.0625 4.921875 9.0625 C 4.832031 9.0625 4.757812 9.136719 4.757812 9.226562 L 4.757812 18.71875 C 4.757812 18.941406 4.570312 19.128906 4.34375 19.128906 C 4.269531 19.128906 4.199219 19.109375 4.132812 19.070312 L 1.242188 17.335938 C 0.871094 17.113281 0.644531 16.710938 0.644531 16.277344 L 0.644531 2.46875 C 0.644531 2.15625 0.988281 1.957031 1.261719 2.113281 Z M 1.261719 2.113281 "/>
</g>
</svg>`;

const GIT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 30 30" version="1.1">
<g id="surface1">
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(94.117647%,31.764707%,20%);fill-opacity:1;" d="M 29.433594 13.664062 L 16.335938 0.566406 C 15.582031 -0.1875 14.359375 -0.1875 13.605469 0.566406 L 10.882812 3.289062 L 14.332031 6.738281 C 15.136719 6.464844 16.054688 6.648438 16.695312 7.285156 C 17.335938 7.929688 17.515625 8.855469 17.238281 9.660156 L 20.5625 12.988281 C 21.371094 12.707031 22.296875 12.890625 22.941406 13.53125 C 23.839844 14.429688 23.839844 15.886719 22.941406 16.78125 C 22.042969 17.679688 20.585938 17.679688 19.6875 16.78125 C 19.011719 16.105469 18.84375 15.113281 19.1875 14.28125 L 16.085938 11.179688 L 16.085938 19.34375 C 16.304688 19.449219 16.511719 19.597656 16.695312 19.777344 C 17.59375 20.675781 17.59375 22.128906 16.695312 23.027344 C 15.796875 23.925781 14.339844 23.925781 13.445312 23.027344 C 12.546875 22.128906 12.546875 20.675781 13.445312 19.777344 C 13.667969 19.554688 13.921875 19.386719 14.195312 19.277344 L 14.195312 11.039062 C 13.921875 10.925781 13.667969 10.761719 13.445312 10.539062 C 12.765625 9.859375 12.601562 8.859375 12.949219 8.027344 L 9.546875 4.621094 L 0.566406 13.605469 C -0.1875 14.359375 -0.1875 15.582031 0.566406 16.335938 L 13.664062 29.433594 C 14.417969 30.1875 15.640625 30.1875 16.398438 29.433594 L 29.433594 16.398438 C 30.1875 15.644531 30.1875 14.421875 29.433594 13.664062 Z M 29.433594 13.664062 Z M 29.433594 13.664062 "/>
</g>
</svg>`;

const GITHUB_SVG = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 1.5C7.58 1.5 1.5 7.58 1.5 15c0 5.93 3.84 10.95 9.23 12.73.67.12.92-.29.92-.65v-2.17c-3.75.81-4.54-1.81-4.54-1.81-.61-1.56-1.5-1.97-1.5-1.97-1.23-.84.09-.82.09-.82 1.36.09 2.07 1.39 2.07 1.39 1.21 2.06 3.17 1.47 3.94 1.12.12-.87.47-1.47.86-1.81-3.02-.34-6.19-1.51-6.19-6.72 0-1.49.53-2.7 1.41-3.66-.14-.35-.61-1.73.13-3.6 0 0 1.15-.37 3.75 1.4A13.08 13.08 0 0 1 15 8.95c1.16.01 2.32.16 3.41.46 2.6-1.77 3.74-1.4 3.74-1.4.74 1.87.28 3.25.13 3.6.88.96 1.41 2.17 1.41 3.66 0 5.23-3.18 6.37-6.21 6.71.49.42.93 1.25.93 2.52v3.74c0 .36.24.78.93.65A13.51 13.51 0 0 0 28.5 15c0-7.42-6.08-13.5-13.5-13.5z" fill="#E0E0E0"/>
</svg>`;

const NPM_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 30 30" version="1.1">
<g id="surface1">
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(75.686276%,12.941177%,15.294118%);fill-opacity:1;" d="M 0.644531 29.355469 L 0.644531 0.644531 L 29.355469 0.644531 L 29.355469 29.355469 Z M 0.644531 29.355469 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 6.027344 6.027344 L 23.972656 6.027344 L 23.972656 23.972656 L 20.382812 23.972656 L 20.382812 9.617188 L 15 9.617188 L 15 23.972656 L 6.027344 23.972656 Z M 6.027344 6.027344 "/>
</g>
</svg>`;

const VSCODE_SVG = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.6 1.57L12 10.95 6.75 6.3 1.5 9.45v11.1l5.25 3.15L12 19.05l9.6 9.38L28.5 25.2V4.8L21.6 1.57zm0 19.28L13.8 15l7.8-5.85v11.7z" fill="#007ACC"/>
</svg>`;

const CURSOR_SVG = `<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <rect width="30" height="30" rx="6" fill="#000000ff"/>
  <path d="M9 7l14 8.5-7.5 1.5-2 8.5-4.5-18.5z" fill="white"/>
</svg>`;

const ANTIGRAVITY_SVG = `
<svg height="1em" style="flex:none;line-height:1" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Antigravity</title><mask height="23" id="lobe-icons-antigravity-fill-0" maskUnits="userSpaceOnUse" width="24" x="0" y="1"><path d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z" fill="#fff"></path></mask><g mask="url(#lobe-icons-antigravity-fill-0)"><g filter="url(#lobe-icons-antigravity-fill-1)"><path d="M-1.018-3.992c-.408 3.591 2.686 6.89 6.91 7.37 4.225.48 7.98-2.043 8.387-5.633.408-3.59-2.686-6.89-6.91-7.37-4.225-.479-7.98 2.043-8.387 5.633z" fill="#FFE432"></path></g><g filter="url(#lobe-icons-antigravity-fill-2)"><path d="M15.269 7.747c1.058 4.557 5.691 7.374 10.348 6.293 4.657-1.082 7.575-5.653 6.516-10.21-1.058-4.556-5.691-7.374-10.348-6.292-4.657 1.082-7.575 5.653-6.516 10.21z" fill="#FC413D"></path></g><g filter="url(#lobe-icons-antigravity-fill-3)"><path d="M-12.443 10.804c1.338 4.703 7.36 7.11 13.453 5.378 6.092-1.733 9.947-6.95 8.61-11.652C8.282-.173 2.26-2.58-3.833-.848-9.925.884-13.78 6.1-12.443 10.804z" fill="#00B95C"></path></g><g filter="url(#lobe-icons-antigravity-fill-4)"><path d="M-12.443 10.804c1.338 4.703 7.36 7.11 13.453 5.378 6.092-1.733 9.947-6.95 8.61-11.652C8.282-.173 2.26-2.58-3.833-.848-9.925.884-13.78 6.1-12.443 10.804z" fill="#00B95C"></path></g><g filter="url(#lobe-icons-antigravity-fill-5)"><path d="M-7.608 14.703c3.352 3.424 9.126 3.208 12.896-.483 3.77-3.69 4.108-9.459.756-12.883C2.69-2.087-3.083-1.871-6.853 1.82c-3.77 3.69-4.108 9.458-.755 12.883z" fill="#00B95C"></path></g><g filter="url(#lobe-icons-antigravity-fill-6)"><path d="M9.932 27.617c1.04 4.482 5.384 7.303 9.7 6.3 4.316-1.002 6.971-5.448 5.93-9.93-1.04-4.483-5.384-7.304-9.7-6.301-4.316 1.002-6.971 5.448-5.93 9.93z" fill="#3186FF"></path></g><g filter="url(#lobe-icons-antigravity-fill-7)"><path d="M2.572-8.185C.392-3.329 2.778 2.472 7.9 4.771c5.122 2.3 11.042.227 13.222-4.63 2.18-4.855-.205-10.656-5.327-12.955-5.122-2.3-11.042-.227-13.222 4.63z" fill="#FBBC04"></path></g><g filter="url(#lobe-icons-antigravity-fill-8)"><path d="M-3.267 38.686c-5.277-2.072 3.742-19.117 5.984-24.83 2.243-5.712 8.34-8.664 13.616-6.592 5.278 2.071 11.533 13.482 9.29 19.195-2.242 5.713-23.613 14.298-28.89 12.227z" fill="#3186FF"></path></g><g filter="url(#lobe-icons-antigravity-fill-9)"><path d="M28.71 17.471c-1.413 1.649-5.1.808-8.236-1.878-3.135-2.687-4.531-6.201-3.118-7.85 1.412-1.649 5.1-.808 8.235 1.878s4.532 6.2 3.119 7.85z" fill="#749BFF"></path></g><g filter="url(#lobe-icons-antigravity-fill-10)"><path d="M18.163 9.077c5.81 3.93 12.502 4.19 14.946.577 2.443-3.612-.287-9.727-6.098-13.658-5.81-3.931-12.502-4.19-14.946-.577-2.443 3.612.287 9.727 6.098 13.658z" fill="#FC413D"></path></g><g filter="url(#lobe-icons-antigravity-fill-11)"><path d="M-.915 2.684c-1.44 3.473-.97 6.967 1.05 7.804 2.02.837 4.824-1.3 6.264-4.772 1.44-3.473.97-6.967-1.05-7.804-2.02-.837-4.824 1.3-6.264 4.772z" fill="#FFEE48"></path></g></g><defs><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="17.587" id="lobe-icons-antigravity-fill-1" width="19.838" x="-3.288" y="-11.917"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="1.117"></feGaussianBlur></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="38.565" id="lobe-icons-antigravity-fill-2" width="38.9" x="4.251" y="-13.493"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="5.4"></feGaussianBlur></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="36.517" id="lobe-icons-antigravity-fill-3" width="40.955" x="-21.889" y="-10.592"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.591"></feGaussianBlur></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="36.517" id="lobe-icons-antigravity-fill-4" width="40.955" x="-21.889" y="-10.592"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.591"></feGaussianBlur></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="36.595" id="lobe-icons-antigravity-fill-5" width="36.632" x="-19.099" y="-10.278"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.591"></feGaussianBlur></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="34.087" id="lobe-icons-antigravity-fill-6" width="33.533" x=".981" y="8.758"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.363"></feGaussianBlur></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="35.276" id="lobe-icons-antigravity-fill-7" width="35.978" x="-6.143" y="-21.659"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.954"></feGaussianBlur></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="46.523" id="lobe-icons-antigravity-fill-8" width="45.114" x="-11.96" y="-.46"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.531"></feGaussianBlur></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="24.054" id="lobe-icons-antigravity-fill-9" width="25.094" x="10.485" y=".58"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.159"></feGaussianBlur></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="30.007" id="lobe-icons-antigravity-fill-10" width="33.508" x="5.833" y="-12.467"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="2.669"></feGaussianBlur></filter><filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="26.151" id="lobe-icons-antigravity-fill-11" width="22.194" x="-8.355" y="-8.876"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.303"></feGaussianBlur></filter></defs></svg>`;

// ── Sphere tech array ───────────────────────────────────────────────────────

export const sphereTechs: SphereTech[] = [
  { name: "HTML", color: "#E34C26", svg: HTML_SVG },
  { name: "CSS", color: "#264DE4", svg: CSS_SVG },
  { name: "JavaScript", color: "#F7DF1E", svg: JS_SVG },
  { name: "TypeScript", color: "#3178C6", svg: TS_SVG },
  { name: "React", color: "#61DAFB", svg: REACT_SVG },
  { name: "Next.js", color: "#E0E0E0", svg: NEXTJS_SVG },
  { name: "Redux", color: "#764ABC", svg: REDUX_SVG },
  { name: "Bootstrap", color: "#7952B3", svg: BOOTSTRAP_SVG },
  { name: "Tailwind", color: "#06B6D4", svg: TAILWIND_SVG },
  { name: "Material UI", color: "#007FFF", svg: MUI_SVG },
  { name: "Git", color: "#F05032", svg: GIT_SVG },
  { name: "GitHub", color: "#E0E0E0", svg: GITHUB_SVG },
  { name: "NPM", color: "#CB3837", svg: NPM_SVG },
  { name: "Vs-Code", color: "#007ACC", svg: VSCODE_SVG },
  { name: "Cursor", color: "#FFFFFF", svg: CURSOR_SVG },
  { name: "Antigravity", color: "#BF00FF", svg: ANTIGRAVITY_SVG },
];
