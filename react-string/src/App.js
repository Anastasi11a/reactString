import Capitalize from './components/Capitalize';
import CountSubstringOccurrences from './components/CountSubstringOccurrences';
import CounterOfVowels from './components/CounterOfVowels';
import Palindrome from './components/Palindrome';
import ReverseString from './components/ReverseString';
import TheLongestWord from './components/TheLongestWord';
import Whitespace from './components/Whitespace';


function App() {
  return (
    <div>
      <CounterOfVowels />
      <ReverseString />
      <Palindrome />
      <Capitalize />
      <TheLongestWord />
      <CountSubstringOccurrences />
      <Whitespace />
    </div>
  );
}

export default App;
