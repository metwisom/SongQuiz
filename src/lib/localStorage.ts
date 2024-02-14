
function saveToLocalStorage(key: string, data: string): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, data);
  }else{

  }
}

function readFromLocalStorage(key: string): string | undefined {

  if (typeof localStorage !== 'undefined') {
    const dataString = localStorage.getItem(key);
    if (dataString == null) {
      return undefined;
    }
    return dataString;
  }else{
    return ''
  }
}

export {readFromLocalStorage, saveToLocalStorage};