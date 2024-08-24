import React, { useState, useEffect } from 'react';
import "./CustomerFeedbackForm.css";

const FeedBackForm = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userRating, setUserRating] = useState(0);
    const [userComments, setUserComments] = useState("");
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        if (formData) {
            console.log('Form data:', formData);
        }
    }, [formData]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (validFormData()) {
            setFormData({ userName, userEmail, userRating, userComments });
            console.log('FormData', userName, userEmail,userRating, userComments)
        }
    };
    const validFormData = () => {
        if (!userName || !userEmail || !userRating || !userComments) {
            alert('Please fill in all required fields');
        }
        if (!isValidEmail(userEmail)) {
            alert("Invalid email Address");
            return false;
        }
        return true;
    };
    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    return (
        <div className='main'>
            <h2>Share your Feedback</h2>
            <form onSubmit={handleFormSubmit}>
                <div className='form-field'>
                    <label>Full Name :</label>
                    <input
                        type='text'
                        placeholder='Please enter your name'
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                        required
                    />

                </div>
                <div className='form-field'>
                    <label>Email Address :</label>
                    <input
                        type='email'
                        placeholder='Please enter your Email '
                        value={userEmail}
                        onChange={(event) => setUserEmail(event.target.value)}
                        required
                    />
                </div>
                <div className='form-field'>
                    <label>Rating : </label>
                       <select
                        value={userRating}
                        onChange={(event) => setUserRating(event.target.value)}
                        required
                    >
                        <option value="0">Select a Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className='form-field'>
                    <label>Comments :</label>
                      <textarea
                        placeholder='Add a Comment'
                        value={userComments}
                        onChange={(event) => setUserComments(event.target.value)}
                        required
                    />
                </div>
                <button type="Submit">Submit Your FeedBack</button>
            </form>
            {formData && (
                <div className='feedback'>
                    <h3>FeedBack Summary:</h3>
                    <p>Full Name: {formData.userName}</p>
                    <p>Email Address: {formData.userEmail}</p>
                    <p>Rating: {formData.userRating}</p>
                    <p>Comments: {formData.userComments}</p>
                </div>
            )}
        </div>
    );
};
export default FeedBackForm;