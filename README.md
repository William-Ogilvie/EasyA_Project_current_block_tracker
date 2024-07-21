# EasyA Project Current Block Tracker



First setup a substrate node using the substrate node template:

```
git clone https://github.com/substrate-developer-hub/substrate-node-template
cd substrate-node-template
git switch -c my-wip-branch
cargo build --release
./target/release/node-template --dev
```
Then once the node is running succesfully open a new terminal and start the front end: 

```
cd node_front_end
npm run dev
```
Then go to http://localhost:5174/ to view the front end.

The front end is a simple block tracker so upon pressing the button it uses Polkadot to find the current block in the chain produced by the node.

(This is a simple project that I made during the London EasyA Polkadot Hackathon with the assistance of chat GPT to gain more of an understanding of blockchain and Polkadot)
