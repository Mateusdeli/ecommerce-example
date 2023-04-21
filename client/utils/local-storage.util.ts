const get = (key: string): string => {
    return localStorage.getItem(key)
}

const set = (key: string, data: string) => {
    localStorage.setItem(key, data)
}

export default {
    get, set
}