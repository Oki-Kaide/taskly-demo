# Proton Taskly Demo
This demo shows the practical usage and integration of the [Proton Web SDK](https://www.npmjs.com/package/@proton/web-sdk) with a simple web application. 

To see the React Native version of this demo using the [Proton React Native SDK](https://www.npmjs.com/package/@proton/react-native-sdk), check out the Github repo [here](https://github.com/ProtonProtocol/taskly-demo-react-native).

Please note that this is not a real web application. The only portions of this app that work are the authentication and transactions with Proton Wallet. You may view the live version of this demo (which uses Protonchain mainnet) at [Proton Taskly Demo](https://taskly.protonchain.com).

## To build and run locally

### Docker

Run a docker container:

```
docker build proton-taskly-demo .

docker images

docker run -p 3000:3000 -i -d [image id]
```

### npm

```
git clone https://github.com/ProtonProtocol/taskly-demo.git

npm install

npm start
```

## To change the chain that the demo is connected to

### Prod / Docker Container

Update `.env.production` file with the correct chain and endpoints.

### Local

Update `.env.local` file with the correct chain and endpoints.

## Chain and Endpoint Information

### ProtonChain Testnet

- Chain Id: 71ee83bcf52142d61019d95f9cc5427ba6a0d7ff8accd9e2088ae2abeaf3d3dd
- Endpoint: https://testnet.protonchain.com


### ProtonChain Mainnet

- Chain Id: 384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0
- Endpoint: https://proton.greymass.com
