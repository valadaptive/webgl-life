import {h, render} from 'preact';
import App from './app.js';

/*const grid = new Grid(2560, 1440);
document.body.appendChild(grid.canvas);
//grid.step();
//setInterval(grid.step.bind(grid), 100);
const step = (): void => {
    grid.stepForMS(10);
    requestAnimationFrame(step);
};

requestAnimationFrame(step);
*/

render(h(App, null), document.body);
