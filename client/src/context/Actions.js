export const LoginStart=(userCredentials)=>({
    type:"LOGIN_START"
});

export const LoginSuccessful=(user)=>({
    type:"LOGIN_SUCCESS",
    payload: user
});

export const LoginFaliure=()=>({
    type:"LOGIN_FALIURE"
});

export const Logout=()=>({
    type:"LOGout"
});

export const UpdateStart=(userCredentials)=>({
    type:"UPDATE_START"
});

export const UpdateSuccessful=(user)=>({
    type:"UPDATE_SUCCESS",
    payload: user
});

export const UpdateFaliure=()=>({
    type:"UPDATE_FALIURE"
});
