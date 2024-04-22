// App.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios'; // Make sure to install axios

const App = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    try {
      const response = await axios.post(
        'https://api.copilot.com/v1/completions',
        {
          prompt: question,
          max_tokens: 50, // Adjust as needed
        },
        {
          headers: {
            Authorization: 'Bearer 36486eebfbbc4b3d84f53593d5a8ef7b.4670371200915497',
          },
        }
      );

      setAnswer(response.data.choices[0].text);
    } catch (error) {
      console.error('Error fetching answer:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Ask a question..."
        onChangeText={setQuestion}
        value={question}
        style={{ marginTop : 300 }}
      />
      <Button title="Ask" onPress={handleAsk} />
      <Text>{answer}</Text>
    </View>
  );
};

export default App;
