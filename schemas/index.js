export const UserSchema = {
    name: 'User',
    properties: {
        name: 'string',
        lastName: 'string',
        photoUrl: { type: 'string', default: 'profile.png' }
    }
};