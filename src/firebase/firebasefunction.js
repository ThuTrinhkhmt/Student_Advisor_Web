import { db, ref, set, get, child, update, remove } from './firebase';
const getUserData = async (role, username) => {
    const userRef = ref(db, `Account/${role}/${username}`);
    try {
        const snapshot = await get(userRef);
        
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    } catch (error) {
        alert("Error loading user data:");
        return null;
    }
};
const getStuData = async (id) => {
    const userRef = ref(db, `Student/${id}`);
    try {
        const snapshot = await get(userRef);
        
        if (snapshot.exists()) {
            
            return snapshot.val();
        } else {
            return null;
        }
    } catch (error) {
        alert("Error loading user data:");
        return null;
    }
};
const getTeaData = async (id) => {
    const userRef = ref(db, `Teacher/${id}`);
    try {
        const snapshot = await get(userRef);
        
        if (snapshot.exists()) {
            
            return snapshot.val();
        } else {
            return null;
        }
    } catch (error) {
        alert("Error loading user data:");
        return null;
    }
};
const getGroupData = async (course, name) => {
    const userRef = ref(db, `Course/${course}/Group/${name}`);
    try {
        const snapshot = await get(userRef);
        
        if (snapshot.exists()) {
            
            return snapshot.val();
        } else {
            return null;
        }
    } catch (error) {
        alert("Error loading user data:");
        return null;
    }
};
const getCourseData = async (idCourse) => {
    const userRef = ref(db, `Course/${idCourse}`);
    try {
        const snapshot = await get(userRef);
        
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    } catch (error) {
        alert("Error loading user data:");
        return null;
    }
};
// Cập nhật dữ liệu cho một người dùng
const updateUserData = async (username, updates) => {
    const userRef = ref(db, `Account/${username}`);
    
    try {
        await update(userRef, updates);
        console.log("User data updated successfully");
    } catch (error) {
        console.error("Error updating user data:", error);
    }
};

// Thêm dữ liệu cho một người dùng
const addUserData = async (username, userData) => {
    const userRef = ref(db, `Account/${username}`);
    
    try {
        await set(userRef, userData);
        console.log("User data added successfully");
    } catch (error) {
        console.error("Error adding user data:", error);
    }
};

// Xóa dữ liệu của một người dùng
const deleteUserData = async (username) => {
    const userRef = ref(db, `Account/${username}`);
    
    try {
        await remove(userRef);
        console.log("User data deleted successfully");
    } catch (error) {
        console.error("Error deleting user data:", error);
    }
};

export { getUserData, getCourseData, getGroupData, getStuData, getTeaData, updateUserData, addUserData, deleteUserData };