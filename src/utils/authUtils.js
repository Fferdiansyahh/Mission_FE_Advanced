// src/utils/authUtils.js
export const transformFirebaseUser = (firebaseUser) => {
  if (!firebaseUser) return null;
  
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    displayName: firebaseUser.displayName,
    photoURL: firebaseUser.photoURL,
    emailVerified: firebaseUser.emailVerified,
    providerData: firebaseUser.providerData 
      ? firebaseUser.providerData.map(provider => ({
          providerId: provider.providerId,
          uid: provider.uid,
          displayName: provider.displayName,
          email: provider.email,
          photoURL: provider.photoURL
        }))
      : []
  };
};