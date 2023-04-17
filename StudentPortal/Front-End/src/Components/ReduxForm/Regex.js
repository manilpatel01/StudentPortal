export const enrollmentRegex = /^[1-2][0-9]028[0-9]{7}$/;
export const nameRegex = /^[A-Za-z. ]+$/;
export const emailRegex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"']).{8,32}$/;
export const contactRegex = /^[5-9][0-9]{9}$/;
export const addLineRegex = /^[a-zA-Z0-9-.,/] ?([a-zA-Z0-9-.,/]|[a-zA-Z0-9-.,/] )*[a-zA-Z0-9-.,/]$/;
export const cityRegex = /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
export const pinRegex = /^[1-9][0-9]{5}$/;
