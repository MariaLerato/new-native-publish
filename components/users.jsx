import firebase from "./firebase";
import React from "react";
const db = firebase.ref('/todo');

class Users {
    getData(){ 
        return db
    };
    createUsers(data){
        return db.push(data)
    };
    getDataById(key){
        return db.child(key)
    };
    updateTodo(key,data){
        return db.child(key).update(data)
    };
    deleteTodo(key){
        return db.child(key).remove()
    };
};
export default new Users()
