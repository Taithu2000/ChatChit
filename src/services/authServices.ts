import { getApp } from '@react-native-firebase/app';
import { get, getDatabase, push, ref, set, update } from '@react-native-firebase/database';
import User from '../models/User';
import { EmailToUid } from '../models/types';
const db = getDatabase(getApp());


//hàm tìm kiếm email 
export const findEmail = async (email: string): Promise<boolean> => {
    const tempEmail = email.replace(/\./g, '_');

    const emailRef = ref(db, `/email_to_uid/${tempEmail}`);
    const snapshot = await get(emailRef)
    return snapshot.exists()
}

// hàm tạo mới user
export const writeUserData = async (user: User): Promise<void> => {
    try {
        const userRef = push(ref(db, '/users')); // tạo uid ngẫu nhiên
        const uid = userRef.key as string
        await set(userRef, {
            email: user.email,
            createdAt: user.createdAt,
            role: user.role,
            fullName: user.fullName,
            phoneNumber: user.phoneNumber,
            dateOfBirth: user.dateOfBirth,
            gender: user.gender,
            avatarUrl: user.avatarUrl,
        });

        const newEmail = user.email.replace(/\./g, '_');
        const emailToUid: EmailToUid = { [newEmail]: uid }
        await update(ref(db, '/email_to_uid'), emailToUid)

        console.log('User data saved successfully with UID:', uid);
    } catch (error) {
        console.error('Error saving user data:', error);
    }
};
