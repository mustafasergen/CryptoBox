import { notification } from "antd";
import { ethers } from "ethers";
import { ConnectionInfo } from "ethers/lib/utils";
import { ContractService } from "./contract-service";

let provider: ethers.providers.Web3Provider;
let connect = false;
let account = '';
let network = -1;
let contract: Readonly<ContractService>;
export class WalletService {
    static get connected() {
        return connect;
    }

    static get network() {
        return network;
    }

    static get contract() {
        this.controlProvider();
        return contract;
    }
    static get provider() {
        this.controlProvider();
        return provider;
    }

    static isWalletAvailable() {
        //@ts-ignore
        return typeof window !== "undefined" && typeof window.ethereum !== "undefined"
    }
    private static checkWallet() {
        if (this.isWalletAvailable()) return;
        throw new Error("Wallet does not available, Please install ethereum wallet!");
    }

    static async getAccounts(): Promise<string[]> {
        this.checkWallet();
        //@ts-ignore
        return window.ethereum.request({ method: 'eth_accounts' }).catch((error: any) => {
            console.log({ error });
            throw new Error("metmask error!");
        })
    }

    static async requestAccounts() {
        this.checkWallet();
        //@ts-ignore
        return window.ethereum.request({ method: 'eth_requestAccounts' }).catch((error: any) => {
            if (error.code === 4001) {
                // EIP-1193 userRejectedRequest error
                console.log('Please connect to MetaMask.');
            } else {
                console.error(error);
            }
            notification.error(error)
            throw new Error("metmask error!");
        })
    }

    static addListener(listener: { type: string, handler: (value: string[] | string | ConnectionInfo | any) => void }) {
        //@ts-ignore
        window.ethereum.on(listener.type, listener.handler);
    }

    static removeListener(listener: { type: string, handler: (value: string[] | string | ConnectionInfo | any) => void }) {
        //@ts-ignore
        window.ethereum.removeListener(listener.type, listener.handler);
    }

    static async checkConnection() {
        await setProvider(await this.requestAccounts());
        return connect;
    }

    static async connect() {
        if (connect) return;
        console.log('baglandı')

        await this.checkConnection();
        if (connect) return;

        await setProvider(await this.requestAccounts());
    }

    private static controlProvider() {
        if (connect && provider) return;
        throw new Error("provider does not available");
    }

}

function setAccount(address: string) {
    if (account === address) return;
    account = address;
    //event nasıl atarız account'ım değişti çocuklarımda değişmeli?
}

function setNetwork(id: number) {
    if (network === id) return;
    network = id;
    //event nasıl atarız account'ım değişti çocuklarımda değişmeli?
}

function setConnectionStatus(value: boolean) {
    if (connect === value) return;
    connect = value;
}

async function setProvider(accounts: string[]) {
    if (!accounts || accounts.length == 0) return;
    //@ts-ignore
    provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    contract = Object.freeze(new ContractService(provider.getSigner()));

    setAccount(accounts[0]);
    setNetwork(await provider.getNetwork().then((x) => x.chainId));
    setConnectionStatus(true);
}

setListeners();

function setListeners() {
    if (!WalletService.isWalletAvailable()) return;

    WalletService.addListener({
        type: "accountsChanged", handler: (accounts) => {
            if (!accounts || accounts.length == 0) {
                setConnectionStatus(false);
                setAccount('');
            } else {
                setConnectionStatus(true);
                setAccount(accounts[0]);
            }
        }
    });

    WalletService.addListener({
        type: "chainChanged", handler: (chainId) => {
            setNetwork(chainId ? Number(chainId) : -1);
        }
    });
} 