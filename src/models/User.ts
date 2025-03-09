class User {
    uid: string;
    email: string;
    createdAt: string;
    role: 'user' | 'admin';
    fullName?: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    gender?: 'male' | 'female';
    avatarUrl?: string;

    constructor(
        uid: string,
        email: string,
        createdAt: string,
        role: 'user' | 'admin',
        fullName?: string,
        phoneNumber?: string,
        dateOfBirth?: string,
        gender?: 'male' | 'female',
        avatarUrl?: string
    ) {
        this.uid = uid;
        this.email = email;
        this.createdAt = createdAt;
        this.role = role;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.avatarUrl = avatarUrl;
    }

    toJSON(): object {
        return {
            uid: this.uid,
            email: this.email,
            createdAt: this.createdAt,
            role: this.role,
            fullName: this.fullName,
            phoneNumber: this.phoneNumber,
            dateOfBirth: this.dateOfBirth,
            gender: this.gender,
            avatarUrl: this.avatarUrl
        };
    }

    // Phương thức static để tạo User từ dữ liệu Firebase
    static fromFirebase(uid: string, data: any): User {
        return new User(
            uid,
            data.email,
            data.createdAt,
            data.role,
            data.fullName,
            data.phoneNumber,
            data.dateOfBirth,
            data.gender,
            data.avatarUrl
        );
    }
}

export default User
