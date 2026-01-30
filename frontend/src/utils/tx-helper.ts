import { makeContractCall, broadcastTransaction, AnchorMode } from '@stacks/transactions';

export async function callContract(functionName, args, network, privateKey) {
    const txOptions = {
        contractAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
        contractName: 'adi-contract',
        functionName,
        functionArgs: args,
        senderKey: privateKey,
        validateWithAbi: true,
        network,
        anchorMode: AnchorMode.Any,
    };
    
    const transaction = await makeContractCall(txOptions);
    return broadcastTransaction(transaction, network);
}
