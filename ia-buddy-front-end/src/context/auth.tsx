// UserStore.ts
export interface User {
  username: string;
}

export class UserStore {
  private user: User | null = null;

  // Singleton instance
  private static instance: UserStore;

  private constructor() {}

  public static getInstance(): UserStore {
    if (!UserStore.instance) {
      UserStore.instance = new UserStore();
    }
    return UserStore.instance;
  }

  public login(username: string) {
    this.user = { username };
  }

  public logout() {
    this.user = null;
  }

  public getUser(): User | null {
    return this.user;
  }
}
