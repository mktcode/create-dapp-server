import { Web3Indexer } from '@mktcodelib/web3indexer';
import networks from './networks';

const indexer = new Web3Indexer({ networks });

indexer.replay();