import App from './app';

const APP = new App();
const SERVER_PORT = 8080;

APP.configure();
APP.run(SERVER_PORT);
