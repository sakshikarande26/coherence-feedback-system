import React from 'react';
import logo from "../assets/Logo.png";
import logo2 from "/public/mlsc-vcet.png"

function Home() {
    return (
        <div className='home-page'>
            <div>
                {/* <img src={logo2} alt="Logo" class="logo2" /> */}
                <h1 class="title">MICROSOFT LEARN STUDENTS CLUB</h1>
            </div>

            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            t
            <div className="heading">
                <span className="welcome">Thank you for participating !</span>
                <br />
                <span className="codefest">Please take a few minutes to share your experience with us. Your feedback is valuable and will help us improve future events.</span>
                <br />
            </div>

            <div className='form-title'>
                FEEDBACK FORM
            </div>

            <div className='form-frame'>
                <div className='form-content'>

                    <div className='question'>
                        <div className="question">
                            Enter your team name..
                            <br />
                            <input type="text" maxlength="20" />
                        </div>

                    </div>

                    <div className='ques1'>
                        How would you rate the overall organization and logistics of the hackathon?
                        <br />
                        <div class="options">
                            <br />
                            <button class="option good" onclick="toggleOption('good')">Good</button>
                            <button class="option satisfactory" onclick="toggleOption('satisfactory')">Satisfactory</button>
                            <button class="option bad" onclick="toggleOption('bad')">Bad</button>
                        </div>
                        <br />
                    </div>

                    <div className='ques2'>
                        How satisfied were you with the venue and facilities provided?
                        <br />
                        <div class="options">
                            <br />
                            <button class="option good" onclick="toggleOption('good')">Good</button>
                            <button class="option satisfactory" onclick="toggleOption('satisfactory')">Satisfactory</button>
                            <button class="option bad" onclick="toggleOption('bad')">Bad</button>
                        </div>
                    </div>

                    <div className='ques3'>
                        How well did the hackathon theme align with your interests and expertise?
                        <br />
                        <div class="options">
                            <br />
                            <button class="option good" onclick="toggleOption('good')">Good</button>
                            <button class="option satisfactory" onclick="toggleOption('satisfactory')">Satisfactory</button>
                            <button class="option bad" onclick="toggleOption('bad')">Bad</button>
                        </div>
                    </div>

                    <div className='ques4'>
                        How satisfied were you with the communication channels and updates throughout the hackathon?
                        <br />
                        <div class="options">
                            <br />
                            <button class="option good" onclick="toggleOption('good')">Good</button>
                            <button class="option satisfactory" onclick="toggleOption('satisfactory')">Satisfactory</button>
                            <button class="option bad" onclick="toggleOption('bad')">Bad</button>
                        </div>
                    </div>

                    <div className='ques5'>
                        How satisfied were you with the judging criteria and evaluation process?
                        <br />
                        <div class="options">
                            <br />
                            <button class="option good" onclick="toggleOption('good')">Good</button>
                            <button class="option satisfactory" onclick="toggleOption('satisfactory')">Satisfactory</button>
                            <button class="option bad" onclick="toggleOption('bad')">Bad</button>
                        </div>
                    </div>

                    <div className='ques6'>
                        How well did the hackathon challenge stimulate creativity and innovation?
                        <br /><div class="options">
                            <br />
                            <button class="option good" onclick="toggleOption('good')">Good</button>
                            <button class="option satisfactory" onclick="toggleOption('satisfactory')">Satisfactory</button>
                            <button class="option bad" onclick="toggleOption('bad')">Bad</button>
                        </div>
                    </div>

                    <div className='ques7'>
                        Rate the fairness and transparency of the judging decisions
                        <br />
                        <div class="options">
                            <br />
                            <button class="option good" onclick="toggleOption('good')">Good</button>
                            <button class="option satisfactory" onclick="toggleOption('satisfactory')">Satisfactory</button>
                            <button class="option bad" onclick="toggleOption('bad')">Bad</button>
                        </div>
                    </div>

                    <div className='ques8'>
                        Rate your overall satisfaction with the hackathon experience.
                        <br />
                        <div class="options">
                            <br />
                            <button class="option good" onclick="toggleOption('good')">Good</button>
                            <button class="option satisfactory" onclick="toggleOption('satisfactory')">Satisfactory</button>
                            <button class="option bad" onclick="toggleOption('bad')">Bad</button>
                        </div>
                    </div>

                    <div className='ques9'>
                        Any suggestions/queries you'd like us to help you with..
                        <br />
                        <br />
                        <input type="text" maxlength="100" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
