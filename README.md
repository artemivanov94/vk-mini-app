[<img width="134" src="https://vk.com/images/apps/mini_apps/vk_mini_apps_logo.svg">](https://vk.com/services)

# Create VK Mini App [![npm][npm]][npm-url] [![deps][deps]][deps-url]

## How to use
1. 
```bash
npm install
```

2.
```bash
npm start
```

3.
```bash
vk-tunnel --insecure=1 --http-protocol=https --ws-protocol=wss --host=localhost --port=10888
```
После успешной авторизации в терминале появится ссылка вида
```bash
https://user12345-jv7zlzzz.wormhole.vk-apps.com
```
Скопируйте ее.
После чего вернитесь в управление созданным приложением в ВК, включите режим разработки и вставьте скопированную ссылку.

 

[npm]: https://img.shields.io/npm/v/@vkontakte/create-vk-mini-app.svg
[npm-url]: https://npmjs.com/package/@vkontakte/create-vk-mini-app

[deps]: https://img.shields.io/david/vkcom/create-vk-mini-app.svg
[deps-url]: https://david-dm.org/vkcom/create-vk-mini-app
