const lsValue = localStorage.getItem(`cart`);

export const lsListObj = lsValue ? JSON.parse(lsValue) : null;
