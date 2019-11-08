import db from '../../config/firebase'
import firebase from 'firebase'
import { fieldValueCreator } from '../../../helpers/services'

export const createdAt = firebase.firestore.FieldValue.serverTimestamp()

export const referenceCreator = async (collection) => db.collection(collection)

export const createDocument = async (collection, mode, data) => {
    const createdAt = firebase.firestore.FieldValue.serverTimestamp()
    const collectionRef = await referenceCreator(collection)
    let response
    if(mode == 'automaticId') response = await collectionRef.add({...data, createdAt})
    if(mode == 'createReplace') response = await collectionRef.set({...data, createdAt})
    return response
}

export const getDocument = async (collection, mode, data, condition = null) => {
    const collectionRef = await referenceCreator(collection)
    let response
    if(mode == 'specificDocument') response = await collectionRef.doc(data).get()
    if(mode == 'allDocuments') response = await collectionRef.get()
    if(mode == 'getCondition'){
        let getData = Object.entries(data)
        response = await collectionRef.where(getData[0], condition, getData[1]).get()
    } 
    return response
}

export const updateDocument = async (collection, mode, data) => {
    const updatedAt = firebase.firestore.FieldValue.serverTimestamp() 
    let response
    const collectionRef = referenceCreator(collection)
    if(mode == 'merge') response = await collectionRef.set({...data, updatedAt}, {merge: true})
    if(mode == 'someFields' || mode == 'nestedFields') response = await collectionRef.update({...data, updatedAt})
    if(mode == 'arrayUnion' || mode == 'arrayRemove' || mode == 'increment' || mode == 'deleteFields'){
        let updateData = fieldValueCreator(data, mode)
        response = await collectionRef.update({...updateData, updatedAt})
    } 
    return response
}

export const deleteDocument = async (collection, mode, documentId) => {
    const collectionRef = await referenceCreator(collection)
    let response 
    if(mode == 'specificDocument') response = await collectionRef.doc(documentId).delete()
    return response
}



/* 
    
    Criar um documento

    * Criar ou substituir um unico documento:
    db.collection("cities").doc('SP').set({})

    * Adicionar um dado em um documento já criado
    db.collection("cities").doc('SP').set({capital: 'sao paulo'}, {merge:true})

    * Criar um documento com id automatico
    db.collection("cities").add({capital: "são paulo"})

    * Criar uma referencia de um documento para usar depois
    let ref = db.collection('cities').doc()
    ref.set(data)

    Atualizar um documento

    * Atualizar apenas alguns campos do documento, sem substituir ele por inteiro
    db.collection("cities").doc('SP').update({capital: "sampa"})

    * Atualizar campos aninhados sem a apagar os seus vizinhos
    db.collection("cities").doc('SP').update({"melhores.restaurantes" : "primedog"})

    * Adicionar um elemento em uma matriz
    db.collection("cities").doc('SP').update({
        cidades : firebase.firestore.FieldValue.arrayUnion("bauru")
    })

    * Remover um elemento de uma matriz
    db.collection("cities").doc('SP').update({
        cidades : firebase.firestore.FieldValue.arrayRemove("bauru")
    }) 

    * Aumentar um valor numérico
    db.collection("cities").doc('SP').update({
        population : firebase.firestore.FieldValue.increment(1000)
    }) 

    Buscar um documento

    * Buscar um unico documento
    db.collection("cities").doc('SP').get()

    * Fazer uma busca por condicoes
    db.collection("cities").where("capital", "==", true)

    * Buscar todos documentos de uma colecao
    db.collection("cities").get()


    Deletar um documento
    
    * Deletar um documento
    db.collection("cities").doc('SP').delete()

    * Excluir campos de um documento
    db.collection("cities").doc('SP').update({
        capital: firebase.firestore.FieldValue.delete()
    });





    ADICIONAR GRAVACAO EM LOTE


    Data e hora de quando o servidor recebe a atualização
    * firebase.firestore.FieldValue.serverTimestamp()


*/
