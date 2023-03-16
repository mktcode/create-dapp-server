/**
 * Here you configure all your network providers and wallets.
 */
export default {
  "11155111": {
    provider: process.env.PROVIDER_URL as string,
    walletKey: process.env.WALLET_KEY as string,
  },
}