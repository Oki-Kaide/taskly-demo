import { ConnectWallet } from '@proton/web-sdk'
import TasklyLogo from '../taskly-logo.svg'

class ProtonSDK {
  constructor() {
    this.chainId = process.env.REACT_APP_CHAIN_ID;
    this.endpoints = [process.env.REACT_APP_CHAIN_ENDPOINT]; // Multiple for fault tolerance
    this.appName = 'Taskly';
    this.requestAccount = 'taskly'; // optional
    this.session = null;
    this.link = null;
  }

  connect = async ({ restoreSession }) => {
    const { link, session } = await ConnectWallet({
      linkOptions: {
        chainId: this.chainId,
        endpoints: this.endpoints,
        restoreSession,
      },
      transportOptions: {
        requestAccount: this.requestAccount,
        backButton: true,
      },
      selectorOptions: {
        appName: this.appName,
        appLogo: TasklyLogo,
      },
    });
    this.link = link;
    this.session = session;
  };

  login = async () => {
    try {
      const { link, session } = await ConnectWallet({
        linkOptions: { chainId: this.chainId, endpoints: this.endpoints },
        transportOptions: { requestAccount: this.requestAccount, backButton: true },
        selectorOptions: { appName: this.appName, appLogo: TasklyLogo}
      });
      this.link = link;
      this.session = session;
      const { auth, accountData } = session;
      
      return { auth: auth, accountData: accountData ? accountData[0] : {
        name: '',
        acc: auth.actor,
        avatar: '',
      }, };
    } catch (e) {
      return { error: e.message || "An error has occurred while logging in"};
    }
  };

  sendTransaction = async (actions) => {
    try {
      const result = await this.session.transact(
        { actions: actions },
        { broadcast: true }
      );
      return result;
    } catch (e) {
      return { error: e.message || "An error has occurred while sending a transaction"};
    }
  };

  logout = async () => {
    await this.link.removeSession(this.requestAccount, this.session.auth);
  }

  restoreSession = async () => {
    try {
      await this.connect({ restoreSession: true });
      if (this.session) {
        const { auth, accountData } = this.session;
        return {
          auth,
          accountData: accountData ? accountData[0] : {
            name: '',
            acc: auth.actor,
            avatar: '',
          },
        };
      }
    } catch(e) {
      return { error: e.message || "An error has occurred while restoring a session"};
    }
    return {
      auth: {
        actor: '',
        permission: ''
      },
      accountData: {}
    };
  }
}

const protonSDK = new ProtonSDK();
export default protonSDK;