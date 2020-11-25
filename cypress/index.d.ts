import * as commands from "./support/commands";

type Commands = typeof commands;

declare global {
  namespace Cypress {
    type Greeting = {
      greeting: string;
      name: string;
    };

    interface Chainable extends Commands {}

    interface GameIFrameSession {
      innerText: string;
      region?: string;
    }
  }
}
