class CacheStore {
  private values: Record<string, any> = {};
  private getters: Record<string, () => any> = {};
  private ttls: Record<string, number> = {};
  private timestamps: Record<string, number> = {};

  addField = ({ key, getter, ttl }: { key: string, getter: () => any | Promise<any>, ttl: number }) => {
    this.getters[key] = getter;
    this.ttls[key] = ttl;
  }

  get = async (key: string) => {
    const existingValue = this.values[key];
    const isFreshEnough = Date.now() - this.timestamps[key] < this.ttls[key];

    if (existingValue && isFreshEnough) {
      return existingValue;
    }

    this.values[key] = await this.getters[key]();
    this.timestamps[key] = Date.now();
    return this.values[key];
  }
}

const cacheStore = new CacheStore();
export default cacheStore;