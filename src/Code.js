import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CppCodeSnippet = () => {
  const cppCode = `
    #include <iostream>

    int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
    }
  `;

  return (
    <SyntaxHighlighter language="cpp" style={solarizedlight}>
      {cppCode}
    </SyntaxHighlighter>
  );
};

export default CppCodeSnippet;
