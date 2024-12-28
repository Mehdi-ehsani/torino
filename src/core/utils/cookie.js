function setCookie(name, value) {
    if (typeof document !== 'undefined') {
      const maxAge = 30 * 24 * 60 * 60;
      document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
    }
  }
  
  function getCookie(name) {
    if (typeof document !== 'undefined') {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return  parts.pop().split(';').shift();
    }
    return null;
  }
  function deleteCookie(name) {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
} 
  export { setCookie, getCookie , deleteCookie };