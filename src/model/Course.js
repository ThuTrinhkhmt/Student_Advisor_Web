import { db, ref, set, get, child, update, remove } from '../firebase/firebase';
import { getCourseData } from '../firebase/firebasefunction';
import { Group } from './Group.js';
export class Course {
    #idCourse;
    #name;
    #title;
    #content;
    #documents = new Map();
    #numOfCredit;
    #groups = [];
    constructor(idCourse) {
        this.#idCourse=idCourse;
        this.loadFromDatabase();
    }

    async loadFromDatabase() {
        const CourseData = await getCourseData(this.#idCourse);
        if (CourseData) {
            this.#name = CourseData.NameOfCourse;
            this.#content = CourseData.Desciption;
            this.#numOfCredit = CourseData.NumOfCredits;
            const arrayGroup = Object.keys(CourseData.Group || {});
            for (const groupID of arrayGroup) {
                //const groupData = new Group(this.#idCourse, groupID);
                //await groupData.loadFromDatabase();
                //this.#groups.push(groupData);
            }
        }
    }

    async setName(name) {
        const userRef = ref(db, `Course/${this.#idCourse}`);
        try {
            await update(userRef, {
                NameOfCourse: name
            });
            this.#name = name;
            console.log("User data updated successfully");
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    }

    getName() {
        return this.#name;
    }

    async setCourseCode(idCourse) {
        const userRef = ref(db, `Course/${this.#idCourse}`);
        try {
            await update(userRef, {
                CodeCourse: idCourse
            });
            this.#idCourse = idCourse;
            console.log("User data updated successfully");
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    }

    getCourseCode() {
        return this.#idCourse;
    }

    setTitle(title) {
        this.#title = title;
    }

    setContent(content) {
        this.#content = content;
    }

    getContent() {
        return this.#content;
    }

    getTitle() {
        return this.#title;
    }

    setNumOfCredit(numOfCredit) {
        this.#numOfCredit = numOfCredit;
    }

    getNumOfCredit() {
        return this.#numOfCredit;
    }

    addDocument(document) {
        this.#documents.push(document);
    }

    getDocuments() {
        return this.#documents;
    }
    getGroup(){
        return this.#groups;
    }
    getAGroup(groupName){
        for (let group of this.groups) {
            if (group.getGroupName() === groupName) {
                return group;
            }
        }
        return null;
    }
    addGroup(groups){
        this.#groups.push(groups);
    }
    deleteGroup(groupName){
        let index = this.groups.findIndex(group => group.getName() === groupName);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}