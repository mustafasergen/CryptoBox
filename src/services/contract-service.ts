import { ethers } from 'ethers'

import abi from '../assets/InterFi.json';

const CONTRACT_ADDRESS = "0x0000";

export type Parent = {
    name: string;
    children: string[];
    Address: string;
}

export type Child = {
    name: string;
    Address: string,
    invester: string;
    releaseTime: Date;
    amount: number;
    isReleasable: boolean;
}
export class ContractService {
    private readonly contract: ethers.Contract

    constructor(signer?: ethers.Signer | ethers.providers.Provider) {
        this.contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
    }

    async addParent(name: string) {
        const response = await this.contract.addParent(name);
        await response.wait();
    }

    async getChild(): Promise<Child> {
        const response = await this.contract.getChild();
        return this.parseChild(response);
    }

    async addChild(child:Child){
        const response = await this.contract.addChild({...child});
        
    }


    private parseChild(value: any): Child {
        return {
            Address: value.Address,
            amount: value.amount,
            invester: value.invester,
            isReleasable: value.isReleasable,
            name: value.name,
            releaseTime: new Date(value.releaseTime)
        } as Child;
    }
}