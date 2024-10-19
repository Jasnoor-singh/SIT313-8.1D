import React, { createContext, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const fetchedQuestions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setQuestions(fetchedQuestions);
  };

  return (
    <QuestionsContext.Provider value={{ questions, fetchQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};
