import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Ukraine?',
			answerOptions: [
				{ answerText: 'Vien', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Kyiv', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the famous Ukrainian poet?',
			answerOptions: [
				{ answerText: 'William Shakespeare ', isCorrect: false },
				{ answerText: 'Taras Shevchenko', isCorrect: true },
				{ answerText: 'Robert Frost', isCorrect: false },
				{ answerText: 'Sylvia Plath', isCorrect: false },
			],
		},
		{
			questionText: 'When Diia City was created?',
			answerOptions: [
				{ answerText: 'May 2020,', isCorrect: true },
				{ answerText: 'May 2018,', isCorrect: false },
				{ answerText: 'January 2019,', isCorrect: false },
				{ answerText: 'March 2020', isCorrect: false },
			],
		},
		{
			questionText: 'How many square km is Ukraine?',
			answerOptions: [
				{ answerText: '60 700 км²', isCorrect: false },
				{ answerText: '105 600 км²', isCorrect: false },
				{ answerText: '30 700 км²', isCorrect: false },
				{ answerText: '603 700 км²', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
