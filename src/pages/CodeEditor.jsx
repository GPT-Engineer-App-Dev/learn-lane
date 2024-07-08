import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(result);
      toast.success("Code executed successfully!");
    } catch (error) {
      setOutput(error.message);
      toast.error("Error executing code.");
    }
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Code Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <Editor
            height="60vh"
            defaultLanguage="javascript"
            defaultValue="// Write your code here..."
            value={code}
            onChange={(value) => setCode(value)}
          />
          <div className="mt-4 flex justify-end space-x-2">
            <Button onClick={runCode}>Run Code</Button>
          </div>
          <div className="mt-4">
            <h2 className="text-xl">Output:</h2>
            <pre className="bg-gray-100 p-2 rounded">{output}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeEditor;