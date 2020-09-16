// import * as sidetreeCrypto from '@sidetree/crypto';
import { UNIVERSAL_WALLET_CONTEXT_URL, placeHolderImage } from '../constants';

// import { KeyPair } from '../types';

export const toKeyPair = async (
  mnemonic: string,
  index: number,
  type = 'Ed25519'
): Promise<any> => {
  // const keypair = sidetreeCrypto.toKeyPair(mnemonic, index, type);
  console.log(mnemonic, index, type);
  return {
    // ...keypair,
    '@context': [UNIVERSAL_WALLET_CONTEXT_URL],
    // id: keypair.controller + keypair.id,
    name: 'Sidetree Key',
    image: placeHolderImage,
    description: 'Generated by @sidetree/wallet.',
    tags: [],
  };
};
