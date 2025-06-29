import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { lessonText } from './lessonPlan.js'
import { acceptableAnswers } from './answersSource.js'
import Split from 'react-split';


function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState(code);
  const [step, setStep] = useState(0);


  

  const gotRight = ["YOU DID GREAT!", "I'm proud of you, keep it up!", "This is great work", "A+++", "1000% on this!", "Super floober fantastic"];
  const gotWrong = ["Oh, not quite?", "Hey, let's give that one another try", "Well, I know you'll good it eventually", "Let's look over that again?", "Not quite, but I'm glad you're trying"];


  const checkAnswer = () => {
     if (Object.keys(acceptableAnswers).includes(step.toString())) {
          const listIndex = step.toString();
          const cleaned = code.trim().replace(/\s+/g, ' ');
          const match = acceptableAnswers[listIndex].some(ans => cleaned === ans.trim().replace(/\s+/g, ' '));
          
          let textChoice = "Default easter egg text";
          if (match) {
               textChoice = gotRight[Math.floor(Math.random() * gotRight.length)];
               alert(textChoice);
          } else {
               textChoice = gotWrong[Math.floor(Math.random() * gotWrong.length)];
               alert(textChoice);
          };
     };
    
  };


  return (
    <div className="h-screen bg-gray-900 text-white">

     <Split className='flex h-full' sizes={[25, 50, 25]} minSize={100} gutterSize={6}>
           <div className="p-4  border-r border-gray-700">
               <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button onClick={() => setStep(Math.max(0, step - 1))} className="bg-yellow-400 text-black px-4 py-1 rounded"  disabled={step===0}>Back</button>
                    <button onClick={() => setStep(Math.min(step + 1, 100))} className="bg-yellow-400 text-black px-4 py-1 rounded" disabled={step===(lessonText.length-1)}>Next</button>
               </div>



               <h2 className="font-bold text-lg">Lesson {step + 1}</h2>
               <iframe
                    title="live preview"
                    srcDoc={lessonText[Math.min(Math.max(0, step), (lessonText.length - 1))]}
                    className="w-full h-full bg-white"
               />
         </div>

         
          <div className='border-b border-gray-700'>
                    <Editor
                    height="90%"
                    language="html"
                    theme="vs-dark"
                    value={code}
                    onChange={(val) => setCode(val ||  "")}
               />

               <div className='p-2'>
                         <button
                         onClick={() => setOutput(code)}
                         className="bg-green-50 hover:bg-green-600 p-2"
                         >
                              Run
                         </button>
               </div>
          </div>
            
           <div className="w-1/4 p-2">
              <iframe
                  title="live preview"
                  srcDoc={output}
                  className="w-full h-full bg-white"
              />
              <button onClick={checkAnswer}
               className='mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded mt-2  '>
                    Check Answer
               </button>
          </div>

         

          
     </Split>
        



         
     

        
    </div>
  );


} 

export default App;