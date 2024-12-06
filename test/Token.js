const {loadFixture} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect }    = require("chai");
const { ethers } = require("hardhat");

describe( "Deployment", ()=>{
    async function deployToken(){
        const [ owner, addr1, addr2] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("TextToken");
        const token = await Token.deploy();
        return {token, owner, addr1, addr2};
    }

    describe( "Initial constant test", ()=>{
        it("Total Supply", async function(){
            const { token} = await loadFixture(deployToken);
            /* Test for total supply equals 1_000_000 */
        })

        it("Owner Balance", async ()=>{
            const {token, owner} = await loadFixture(deployToken);
            /* Test for owner has total supply */
        })
    })

    describe(" Transactions", ()=>{
        it("Transfer amount from owner to address 1", async ()=>{
            const _amount = 100;
            const {token, owner, addr1} = await loadFixture(deployToken);
		/* Test to transfer from owner to address 1 */
        });
        
        it("Change Text", async ()=>{
            const _text = "Hello, work";
            const _amount = 100;
            const {token, owner, addr1} = await loadFixture(deployToken);
		/* Test for setText */
        })

    })

})
