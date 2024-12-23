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
            const TOTAL_SUPPLY = await ethers.parseEther("1000000");
            expect(await token.totalSupply()).to.equal(TOTAL_SUPPLY);
        })

        it("Owner Balance", async ()=>{
            const {token, owner} = await loadFixture(deployToken);
            /* Test for owner has total supply */
            expect(await token.totalSupply()).to.equal(await token.balance0f(owner))
        })
    })

    describe(" Transactions", ()=>{
        it("Transfer amount from owner to address 1", async ()=>{
            const _amount = 100;
            const {token, owner, addr1} = await loadFixture(deployToken);
		/* Test to transfer from owner to address 1 */
        expect(await token.transfer(addr1, _amount)).to.changeTokenBalance(token, [owner, addr1], [-_amount, +_amount]);
        });
        
        it("Change Text", async ()=>{
            const _text = "Hello, work";
            const _amount = 100;
            const {token, owner, addr1} = await loadFixture(deployToken);
		/* Test for setText */
        await token.transfer(addr1, _amount);
        await token.connect(addr1).setText(_text);
        expect(await token.text()).to.equal(_text);
        expect(await token.text()).to.equal(_text);
        })

    })

})
