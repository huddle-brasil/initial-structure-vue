import db from '../../config/firebase'
import firebase from 'firebase'

export const createdAt = firebase.firestore.FieldValue.serverTimestamp()

export const simpleDocumentCreation = async (collection, data) => {
    const request = await db.collection(collection).add(data)
    return request
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

    * Buscar todos documentos deu ma colecao
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
