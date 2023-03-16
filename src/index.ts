/**
 * This file bla bla bla...
 */
import { Web3Indexer } from '@mktcodelib/web3indexer';

const indexer = new Web3Indexer({
  networks,
  listeners,
  endpoints,
  graphql,
  debug: true,
});

indexer.replay();