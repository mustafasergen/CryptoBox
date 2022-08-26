import { Address } from 'cluster';
import { ethers } from 'ethers'

import abi from '../assets/InterFi.json';

const CONTRACT_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export type Parent = {
    name: string;
    children: string[];
    Address: string;
}

export type Child = {
    name: string;
    Address: string,
    invester: string;
    releaseTime: number;
    amount: number;
    isReleasable: boolean;
}

export class ContractService {
    private readonly contract: ethers.Contract

    constructor(signer?: ethers.Signer | ethers.providers.Provider) {
        this.contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
    }

    async ageCalc(_Address: string) {
        const response = await this.contract.ageCalc(_Address)
        await response.wait()
    }

    async addParent(name: string) {
        const response = await this.contract.addParent(name);
        await response.wait();
        console.log('okay')
    }

    async getChild(): Promise<Child> {
        const response = await this.contract.getChild();
        return this.parseChild(response);
    }

    async addChild(_Address: string, _releaseTime: number, _name: string) {
        const response = await this.contract.addChild(_Address, _releaseTime, _name);
        await response.wait();
    }
    async getBalance(): Promise<number> {
        const response = await this.contract.getBalance();
        return response;
    }
    async getAmount(_Address: string): Promise<number> { //çocuğun birikmiş parasınnı döndürüyor
        const response = await this.contract.getAmount(_Address);
        return response;
    }
    async getOwner(): Promise<string> {
        const response = await this.contract.getOwner();
        return response;
    }

    async getChildren(): Promise<Child[]> {
        const response = await this.contract.getChildren()

        response.forEach((element: any) => {
            // element address of the caller
            const childObj = element.getChild(); // get addres of the caller of the function
            this.parseChild(childObj)
        });
        return response
    }

    async getParent(): Promise<Parent> {
        const response = await this.contract.getParent()
        return {
            name: response.name,
            children: response.children,
            Address: response.Address
        } as Parent;
    }
    async getRole(): Promise<string> {
        const response = await this.contract.getRole()
        return response
    }

    async getChildrenList(): Promise<Child[]> {
        const response = await this.contract.getChildrenList()
        return response.map((child: any) => {
            return this.parseChild(child)
        })
    }
    async getReleaseTime(_Address: string): Promise<number> {
        const response = await this.contract.getReleaseTime(_Address)
        return response
    }
    async getAllAmounts(): Promise<number[]> {
        let amounts = []
        const response = await this.contract.getChildrenList()
        for (let i = 0; i < response.length; i++) {
            amounts.push(response[i].amount)
        }
        return amounts;
    }

    async fund(Address: string, sendValue: number) {
        console.log("fundcheck1")
        console.log(sendValue)
        const response = await this.contract.fund(Address, {
            value: ethers.utils.parseEther(sendValue + "")
        });
        console.log("fundcheck2")
        await response.wait()

    }
    async withdrawChild(Address: string, amount: number) {
        const response = await this.contract.withdrawChild(Address, amount)
        await response.wait()
    }
    async withdrawParent(Address: string, amount: number) {
        console.log(Address, amount)
        const response = await this.contract.withdrawParent(Address,
            ethers.utils.parseEther(amount + ""))
        await response.wait()
    }


    private parseChild(value: any): Child {
        return {
            Address: value.Address,
            amount: value.amount,
            invester: value.invester,
            isReleasable: value.isReleasable,
            name: value.name,
            releaseTime: value.releaseTime
        } as Child;
    }
}