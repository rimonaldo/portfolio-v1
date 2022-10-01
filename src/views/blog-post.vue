<template>
  <section class="layout blog-post">
    <router-link to="/blog"> back </router-link>
    <h1>post</h1>
    <div class="">
      <p>
        In the last month of the #CodingAcademy Bootcamp, in a poorly timed sports injury, I fractured my right arm. Without a functioning dominant hand, I challenged myself to complete the React and Angular workshops at a pace that I could maintain with my cast. 


The React assignment that we were given was this:
To create a front end demo app that simulated coin transfers between contacts, allowed for managing of contacts, and received the coin price from the bitcoin market price API, while managing the API requests through a caching mechanism.


Before I began the bootcamp, I discovered how interested I am in buying and selling stocks and cryptocurrency. Researching fintech, market fundamentals and stocks price actions became a passion and hobby of mine. 

Because my injury hindered me from completing the basic React assignment at the course’s pace, I decided to build on the assignment, and combine two passions of mine to implement a blockchain logic of my own. 
popCoin is a responsive blockchain influenced token project that allows you to send, receive, and mine transactions, as well as manage contacts, using React and Redux for state management on the front end, and a node-js server on the back end.

Important concepts: 
Cryptocurrency: a digital currency in which transactions are verified and records are maintained by a decentralised system using cryptography, rather than by a centralised authority.

Hash & hash functions: Hashing, in our context, is the process of converting one or more parameters into a long string of random letters, characters, and symbols, to the extent that the raw information cannot be recovered to its original form. Hashing takes a piece of information and passes it through a function that performs mathematical operations on the plaintext. This function is called the hash function, and the output is called the hash value/digest. The most commonly used hashing function in the crypto world is SHA256.

Key pair: A key pair is a combination of a public key that is used to encrypt data, and represents the user's wallet address, and a private key, which is used to decrypt data, used as a digital signature, and should not be shared with anyone. The key pair is generated together, and can be verified as a legitimate pair only if they indeed belong to one another, via a validation function. Cryptr is a fantastic library to generate and validate such keys.

Main ideas and implementations
Transaction: A transaction includes information as sender details, receiver details, amount of coins, a timestamp of the transaction, and a unique id. The sender needs to "sign" on a transaction with their private key.

In popCoin, every transaction’s legitimacy is validated via the key pair. When a transaction is made, the sender is requested to sign with their unique private key. Then there's a test on the server side to check if the private key that was used as the signature and the logged in user’s public key that was read out of the session storage makes a legitimate key pair.


Pending
After the transaction has been sent, its status is pending. During the pending phase, the transaction is in a "pool" of pending transactions. Because the transaction is still pending, both the sender and the receiver still hold the same amount of coins as before the transaction. The transaction is waiting to be mined. 

Mining
Mining is the action of validating transactions, and compressing them into a single block, that would be added to our blockchain.The role of the miner is to provide the computational power needed to find a hash that is valid according to the rules of each cryptocurrency.
A transaction can be mined only once, so if miner A and miner B are both mining the same transactions, the miner who would provide the block and would be validated first, is the only miner who hes block’s going to count
The reward of mining is tokens. The procedure of mining is complex to execute, but easy to validate. That is an important concept which will be explained soon. For now it is important to understand the end product of mining which is a mining reward, and a block with a valid hash.

Valid hash
The conditions for a valid hash vary, and change according to the crypto coin creators .
In order to understand the concept of valid hash, I will discuss a popular and easy-to-follow example: the zeros method. 
In the zeros method, a has is considered valid if it starts with, and contains the number zero a set number of times consecutively. 
The set value for the number of zeros required for a valid hash depends on the level of difficulty. For example, if we set the level of difficulty to four, then in order for a hash to be valid, it must have four zeros as the first four values. Here is an example of a valid hash, with the difficulty level set to four: 0000bf0d6db...  
 
In popCoin, the hash function receives the next parameters: 
- Mining start time stamp
- JSON string of all transactions that are included in the block
- last block's Hash
-  Special parameter called nonce

The parameters that will go inside the hash function generate a random hash, that is probably not valid, So what is my job as a miner? The Miner’s job is to run the hash function over and over in a while loop, that its end point is when the function generates a valid hash that starts with zero the amount of times were decided is the difficulty.
and that is where nonce is taking its part. that parameter is inittialized to zero, and incrementing itself on every itteration.That is the only parameter that chanes in the function and that is the reason the function will change its hash output every time until it hits a valid hash and it will stop. nonce can also looked at the amount of time the miner ran the function and looked for a valid hash. after this part, the miner now have a hash and a solid Proof of Work.

Proof of Work
Proof of work is the proof of legitimacy of the hash. as we stated in the intro, a cryptocurency is a decentrilsed. that means it is ran by a lot of different people that are not related to eachother, they are also called validators or nodes. as long as there is even one node running, the system is on. after the miner has mined the block and got its hash, he also has all the parameters that were passed to the function to find the hash, including the nonce.
combine all those and you suppose to get the exact same hash. that is why it is complex to to execute and easy to validate. 
once all nodes\validators checked the proof of work and all agreed its legit, we made it to the point of concenzeus , and at this point to the blockchain was added a new block .

Block
Block represents a part, or as its name, a block in the data structure of the blockchain.every each block  holds in it data about transactions that were included in it. It is most likely to have a set amount of transactions in every single block. for example the number of transactions in each block in the Bitcoin blockchain is 500.
in popCoin there is not minimal or set amount of transactions that needed to be mine in a single block, to allow for a easy mining experience. every block has its own unique hash that would be used as an important part of protecting the blockchain.

Blockchain
the blockchain is a data structor working as a chain, or array of blocks, that are depending one on top of eachother for security reasons. this data structor allows validating legitimacy of each block by chaining the hash of each block to the next one.
validating chain is essential , and works like this: each time a block is added, a set of blocks  is tested to check  each blocks hash is correct with the hash of the block that is prior to itself.
in popCoin, one of the hash ingredients is a JSON string of all its transactions, and the hash of the prior block.
If a melicious hacker wants to temper with a certain transaction, , changing a transaction would cause a change in the hash. even if he would be able to validate the new hash somehow to the data base, since the next block used the the prior  block's hash, this one would not be valid anymore and so on. theoreticly the only way of hacking into a well structored blockchain would be to temper with all of its blocks, before even one validator/node would try and validate. that is not immposible, but it sure is very close to immposible.
The blockchain represents all of this puzzle parts , and its the whole product of this thecnology. in this post we covered some of its core concepts. i hope that you enjoyed reading it, and that i succsesfuly transfered some of the knowledge i enquired in the last couple of week. with that it is important to state that i am no expert. i tried to percise as much as i could,  and there are a lot more interesting and important concepts that were not discussed or were not deeply covered in this post. I encourage you all, inluding myself to explore about this amazing topic.

This project has introduced me to plenty of new concepts to comprehend, and challenges to crack.

I really enjoyed learning about and implementing such an amazing piece of technology, and watching it come to life in my app. 

thanks for whoever invested hes time and i hope you enjoyd reading this.



      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'blogPost',
  components: {},
  data() {
    return {};
  },
  created() {
    console.log('post');
  },
  methods: {},
  computed: {},
  unmounted() { },
};
</script>
<style>

</style>