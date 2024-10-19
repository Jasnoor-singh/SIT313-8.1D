import React, { useContext, useState, useEffect } from 'react';
import { QuestionsContext } from '../contexts/QuestionsContext';
import NavBar from './NavBar';
import './QuestionPage.css'; // Importing the CSS file

// Function to format Firestore Timestamp to a readable date
const formatDate = (timestamp) => {
  if (timestamp && timestamp.seconds) {
    const date = new Date(timestamp.seconds * 1000); // Convert Firestore Timestamp to JS Date
    return date.toLocaleDateString(); // Format as a readable string
  }
  return 'Unknown Date'; // Fallback for missing dates
};

const QuestionPage = () => {
  const { questions, fetchQuestions } = useContext(QuestionsContext);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [filterTag, setFilterTag] = useState('');
  const [filterTitle, setFilterTitle] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // Fetch questions when the component mounts
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  // Toggle to expand/collapse a question
  const toggleExpand = (id) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null); // Collapse if already expanded
    } else {
      setExpandedQuestion(id); // Expand the selected question
    }
  };

  // Filter questions based on tag, title, or date
  const filteredQuestions = questions.filter((question) => {
    const matchesTag = filterTag ? question.tags?.includes(filterTag) : true;
    const matchesTitle = filterTitle ? question.title.toLowerCase().includes(filterTitle.toLowerCase()) : true;
    const matchesDate = filterDate ? formatDate(question.createdAt) === filterDate : true;
    return matchesTag && matchesTitle && matchesDate;
  });

  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="question-heading">Find a Question</h2>

        <div className="filter-section">
          <input
            type="text"
            placeholder="Filter by Tag"
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Title"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
          />
          <input
            type="date"
            placeholder="Filter by Date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </div>

        <div className="question-list">
          {filteredQuestions.length === 0 ? (
            <p>No questions available.</p>
          ) : (
            filteredQuestions.map((question) => (
              <div key={question.id} className="card-content">
                <div className="card-header">{question.title}</div>
                <div className="card-meta">{formatDate(question.createdAt)}</div>
                <div className="card-description">{question.description}</div>

                {/* Expanded section for more details */}
                {expandedQuestion === question.id && (
                  <div className="card-details">
                    <p>Tags: {Array.isArray(question.tags) ? question.tags.join(', ') : 'No tags'}</p>
                    <p>More details about the question...</p>
                  </div>
                )}

                <button className="show-more-btn" onClick={() => toggleExpand(question.id)}>
                  {expandedQuestion === question.id ? 'Show Less' : 'Show More'}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
