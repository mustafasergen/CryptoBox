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

    async ageCalc() {
        const response = await this.contract.ageCalc()
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
    async getAmount(): Promise<number> {
        const response = await this.contract.getAmount();
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

    async withdrawChild(Address: string, amount: number) {
        const response = await this.contract.withdrawChild(Address, amount)
        await response.wait()
    }
    async withdrawParent(Address: string, amount: number) {
        const response = await this.contract.withdrawParent(Address, amount)
        await response.wait()
    }



    async fund(Address: string) {
        const response = await this.contract.fund(Address);
        await response.wait()

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