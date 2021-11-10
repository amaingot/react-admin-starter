import { AuthProvider } from "ra-core";
import { Auth } from "@aws-amplify/auth";

export interface AuthProviderOptions {
  authGroups?: string[];
}

const defaultOptions = {
  authGroups: [],
};

type AmplifyAuthErrorCode =
  | "NEW_PASSWORD_REQUIRED"
  | "USER_NOT_CONFIRMED"
  | "SMS_MFA_CHALLENGE"
  | "SOFTWARE_TOKEN_MFA_CHALLENGE"
  | "MFA_SETUP_REQUIRED"
  | "NOT_AUTHORIZED";

export class AmplifyAuthError extends Error {
  constructor(msg: string, public readonly code: AmplifyAuthErrorCode) {
    super(msg);
  }
}

export class AmplifyAuthProvider implements AuthProvider {
  public authGroups: string[];

  public constructor(options?: AuthProviderOptions) {
    this.authGroups = options?.authGroups || defaultOptions.authGroups;
  }

  public async login(params: Record<string, unknown>): Promise<void> {
    const username = params.username as string;
    const password = params.password as string;
    const clientMetadata = params.clientMetadata as any;

    try {
      const user = await Auth.signIn(username, password, clientMetadata);

      switch (user.challengeName) {
        case "NEW_PASSWORD_REQUIRED":
        case "USER_NOT_CONFIRMED":
        case "SMS_MFA_CHALLENGE":
        case "SOFTWARE_TOKEN_MFA_CHALLENGE":
        case "MFA_SETUP_REQUIRED":
        case "NOT_AUTHORIZED":
          throw new AmplifyAuthError("Auth error", user.challengeName);
      }
      if (typeof params.callback === "function") {
        await params.callback();
      }
    } catch (error) {}
  }

  public logout = (): Promise<any> => {
    return Auth.signOut();
  };

  public checkAuth = async (): Promise<void> => {
    const session = await Auth.currentSession();

    if (this.authGroups.length === 0) {
      return;
    }

    const userGroups = session.getAccessToken().decodePayload()[
      "cognito:groups"
    ];

    if (!userGroups) {
      throw new Error("Unauthorized");
    }

    for (const group of userGroups) {
      if (this.authGroups.includes(group)) {
        return;
      }
    }

    throw new Error("Unauthorized");
  };

  public checkError = (): Promise<void> => {
    return Promise.resolve();
  };

  public getPermissions = async (): Promise<string[]> => {
    const session = await Auth.currentSession();

    const groups = session.getAccessToken().decodePayload()["cognito:groups"];

    return groups ? Promise.resolve(groups) : Promise.reject();
  };
}
