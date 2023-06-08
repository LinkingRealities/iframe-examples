# @unionavatars/iframe examples

Examples on how to use @unionavatars/iframe package

## Official docs

Official documentation can be found [here][official-docs]

## How to run it

```
yarn dev
```

The base index page will redirect to any desired examples. Some examples included done with vanilla js, react, or vue. Explaining how to do authorization, navigation, or theme styling.

> :warning: **Theming can only be done via paid subscription**
> The iframe allows the feature on localhost, it won't work on non allowlisted production servers

## Quickstart react

The react application uses a `Provider` which connects the iframe and calls setup after the `Iframe` inside the `Provider` has been loaded.

After this just use the `useIframeContext` to get the `client` which can perform calls to the iframe application.

```ts
import { Provider, Iframe, useIframeContext } from '@unionavatars/iframe/react'

function Application () {
  const { eventer } = useIframeContext()
  const onClick = () => {
    eventer.request('goto', 'Register')
  }
  return <button onClick={onClick}>Go to register page</button>
}

function Example () {
  return (
    <Provider>
      <Application />
      <Iframe src="https://iframe.unionavatars.com" />
    </Provider>
  )
}
```

## Quickstart vue

Inside the vue namespace there is a `Plugin` that can be injected with the Vue application. This plugin will listen to the `Iframe` load event and populate the context with the `client` ready to use.



```ts
// inside the app.vue file
import { Plugin } from '@unionavatars/iframe/vue'
const app = createApp(apps[name])
app.use(Plugin())
app.mount('#root')
```

```ts
// inside any child page
<template>
  <Iframe src="https://iframe.unionavatars.com" />
  <button @click="goToRegister">Go to register page</button>
</template>

<script lang="ts" setup>
import { Iframe, useIframeContext } from '@unionavatars/iframe/vue'

const ctx = useIframeContext()

function goToRegister () {
  ctx?.eventer?.request('goto', 'Register')
}
</script>
```

## Any request?

Do you have questions or need help? Maybe your company needs an specific feature or assistance?

Come say hi to our [discord server][discord] or contact us via [twitter][twitter] or [instagram][instagram].

[official-docs]: https://docs.unionavatars.com/docs/Integration/IFrame/get_started
[discord]: https://discord.gg/WMTFpq3eKe
[twitter]: https://twitter.com/UnionAvatars
[instagram]: https://www.instagram.com/unionavatars/
