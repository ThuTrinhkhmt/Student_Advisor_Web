import { Student } from './Student';
import { Teacher } from './Teacher';
import { getUserData } from '../firebase/firebasefunction';
//Dung Factory Method de tao cac doi tuong dua tren role, username
export class PersonFactory {
    static async createPerson(type, username) {
        switch(type) {
            //Tao Student
            case 'Student':
                const userData = await getUserData('Student', username);
                if(userData) return new Student(userData.ID);
                break;
                //Tao Teacher
            case 'Teacher':
                const TeacherData = await getUserData('Teacher', username);
                if(TeacherData) return new Teacher(TeacherData.ID);
                break;
            default:
                throw new Error(`Invalid person type: ${type}`);
        }
    }
}