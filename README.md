# Extended Client

A Client who extends the base of [discord.js](https://github.com/discordjs/discord.js), offers an integrated builder of SlashCommands with [@discordjs/builders](https://github.com/discordjs/builders) and handlers.

## Installation

Node.js 16.9.0 is required (same version as discord.js)

```sh-session
npm install extended-client
```

## Example Usage (ESM syntax)

Setup the client.

```js
const extendedClient = new ExtendedClient({
    intents: myIntents,
    token: "TOKEN"
})
```

Load the handlers.
```js
extendedCLient.eventHandler.load("myDirectory")

extendedClient.slashHandler.load("myDirectory", 0) // 0 is a default value but you can use another positive value
/**
 * Warning !!
 * handler must be in the following format:
 * 
 * index.js
 * eventHandler/
 *  |-> event.js
 **/
```

> Do a command file
```js
// commandHandler/utilities/ping.js

export const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Send the bot ping")

export const execute = async (client, interaction) {
    //your code
}
```
> Do an event file
```js
// eventHandler/ready.js

export const name = "ready"
export const once = true

export function execute(client){
    //your code
}
```

### Use the integrated Builder

```js
import { Builder } from "extended-client"

const builder = new Builder(extendedClient)

builder.globalBuild(extendedClient.slashHandler.slashCommands)

// actually, the builder only support global push

```


## Help

if you need help for something don't hesitate to join this [discord server](https://discord.gg/qDwZK8McnW) and ping Bastien#1414