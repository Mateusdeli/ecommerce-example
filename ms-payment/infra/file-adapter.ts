import fs from 'fs/promises';

export default class FileAdapter {
  async read<T>(path: string): Promise<T[]> {
    const result = await fs.readFile(path, { encoding: 'utf-8' })
    return JSON.parse(result)
  }
  async write<T>(path: string, data: T): Promise<void> {
    await fs.writeFile(path, JSON.stringify(data));
  }
}