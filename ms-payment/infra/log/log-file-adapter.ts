import path from 'path'
import FileAdapter from "../file-adapter";

type LogProps = {
  file: string,
  stack: any
}

export default class LoggerFileAdapter {
  private readonly fileName: string = 'logs.txt'
  private path: string = ''

  constructor(private readonly fileAdapter: FileAdapter) {
    this.path = path.join(__dirname, this.fileName)
  }

  private async loadContents(): Promise<LogProps[]> {
    if (!this.path) {
      throw new Error('Error: file path not found.')
    }

    if (!this.fileName) {
      throw new Error('Error: log file not defined.')
    }

    return await this.fileAdapter.read(this.path)
  }

  async log(data: LogProps) {
    const contents = await this.loadContents()
    contents.push(data)
    await this.fileAdapter.write(this.path, contents)
  }
}