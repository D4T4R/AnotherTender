# AnotherTender

## Final Year CSE Project for SPPU, in PVG's COET, Pune
Sponsored by **[IncuGlobe Solutions Pvt. Ltd.](http://www.incuglobe.com)**




**Project Description:**

  An overview of how the process of E-Tendering for government projects can take place on the Blockchain.
  
  A Decentralized platform to host complete tendering process.
  
  
  
  **Technologies/Tools/Frameworks Used :**
  
  1. MongodB - Credential and information storage
  
  2. [Truffle](https://github.com/trufflesuite/truffle) - Smart Contract compilation and logging
  
  3. NodeJS - Application hosting and Logging
  
  4. [ExpressJS](https://expressjs.com/) - Base Application Framework and Routing
  
  5. [Mythril](https://github.com/ConsenSys/mythril) - Contract security testing
  
  6. Bootstrap 4 - Design and UI
  
  7. [Ganache](https://github.com/trufflesuite/ganache) - Local Blockchain
  
  8. [Metamask](https://github.com/MetaMask/metamask-extension)  - Ethereum Browser
  
  ##
  
  Steps to run the project :


  1. Clone this repository.
  
  2. cd into the project directory
  
  3. Install dependencies : `sudo npm install`  OR  `yarn install`
  
  4. Start Ganache : `npx ganache`
  
  5. Copy the private addresses generated by Ganache
  
  6. Compile and Deploy the contracts on Ganache using Truffle : `npx truffle migrate`
  
  7. Install [MongodB Compass](https://downloads.mongodb.com/compass/mongodb-compass_1.35.0_amd64.deb)
  
  8. Start Mongo Server, `sudo systemctl start mongod` for Linux and Standalone Application for Windows.
  
  9. `cd` into the `src` sub-directory.
  
  10. run `npx nodemon app.js` to start the app.
  
  11. Install Metamask extension for Chrome/Firefox
  
  12. Add Localhost to the list of networks in Metamask and switch to that network.
  
  13. Import previously copied private addresses to Metamask.
  
  14. Open MongodB Compass. 
  
  15. Your App is up and running. 
  
  
##

Project Contributors


[Aniket Datar](https://github.com/D4T4R) - Blockchain Backend

[Atharv Vaspate](https://github.com/Atharv73) - Backend

[Shankar Avad](https://github.com/Shankar247) - Frontend
  
[Niranjan Patankar](https://github.com/nira07) - Frontend and Design


##

For more information about this project, Visit [here](https://drive.google.com/drive/folders/0B1QC1GVSb2DJflR2dERPdEpqM1pBSDFBck03NFlZb1BkRGtvTFhIZHJ4Mll0RG5xZF9FYms?resourcekey=0-7v_HsY7djSM2gfWq_jUpGA)
