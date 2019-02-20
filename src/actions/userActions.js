export const UPDATE_USER='updateUser';

export function updateUser(newUser){
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}